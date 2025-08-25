import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { Prisma, ShiftSession } from "../../generated/prisma";

export async function getAllDailyTransactions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.query);
    const {
      page,
      limit,
      transaction_date,
      search_id_cashier_name,
      cashier_shift,
    } = req.query;
    const whereClause: Prisma.TransactionWhereInput = {
      deletedAt: null,
    };

    if (transaction_date) {
      const date = new Date(transaction_date as string);
      const startOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0
      );
      const endOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        999
      );

      whereClause.createdAt = {
        gte: startOfDay,
        lte: endOfDay,
      };
    }

    if (search_id_cashier_name) {
      whereClause.OR = [
        {
          id: { contains: String(search_id_cashier_name), mode: "insensitive" },
        },
        {
          cashier: {
            OR: [
              {
                firstName: {
                  contains: String(search_id_cashier_name),
                  mode: "insensitive",
                },
              },
              {
                lastName: {
                  contains: String(search_id_cashier_name),
                  mode: "insensitive",
                },
              },
            ],
          },
        },
      ];
    }

    if (cashier_shift) {
      whereClause.cashier = {
        shift: { in: [cashier_shift as ShiftSession] },
      };
    }

    const pageNumber = page ? parseInt(page as string) : 1;
    const pageLimit = limit ? parseInt(limit as string) : 10;

    const totalItems = await prisma.transaction.count({
      where: whereClause,
    });

    let transactions = await prisma.transaction.findMany({
      include: {
        cashier: {
          select: { id: true, firstName: true, lastName: true, shift: true },
        },
        cashierBalanceHistory: {
          select: { id: true, startingCash: true, endingCash: true },
        },
        transactionItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                productCategory: { select: { id: true, name: true } },
              },
            },
          },
        },
      },
      where: whereClause,
      skip: (pageNumber - 1) * pageLimit,
      take: pageLimit,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "Success",
      type: "daily",
      transactions,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllMonthlyTransactions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit } = req.query;
    const pageNumber = page ? parseInt(page as string) : 1;
    const pageLimit = limit ? parseInt(limit as string) : 10;

    // Get raw aggregated data grouped by date
    const dailyTransactions = await prisma.transaction.groupBy({
      by: ["createdAt"],
      where: { deletedAt: null },
      _sum: {
        totalAmount: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Group by date (remove time part)
    const groupedByDate = dailyTransactions.reduce(
      (acc, transaction) => {
        const dateKey = transaction.createdAt.toISOString().split("T")[0]; // Get YYYY-MM-DD

        if (!acc[dateKey]) {
          acc[dateKey] = {
            date: dateKey,
            totalAmount: 0,
            transactionCount: 0,
          };
        }

        acc[dateKey].totalAmount += transaction._sum.totalAmount || 0;
        acc[dateKey].transactionCount += transaction._count.id;

        return acc;
      },
      {} as Record<
        string,
        { date: string; totalAmount: number; transactionCount: number }
      >
    );

    // Convert to array and sort
    const transactions = Object.values(groupedByDate)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice((pageNumber - 1) * pageLimit, pageNumber * pageLimit);

    const totalItems = Object.keys(groupedByDate).length;

    res.status(200).json({
      success: true,
      message: "Success",
      type: "monthly",
      transactions,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllDailyItemTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit, transaction_date } = req.query;
    const pageNumber = page ? parseInt(page as string) : 1;
    const pageLimit = limit ? parseInt(limit as string) : 10;

    // Set date range - default to today if not provided
    let startOfDay: Date;
    let endOfDay: Date;

    if (transaction_date) {
      const date = new Date(transaction_date as string);
      startOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0
      );
      endOfDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        999
      );
    } else {
      // Default to today
      startOfDay = new Date(new Date().setHours(0, 0, 0, 0));
      endOfDay = new Date(new Date().setHours(23, 59, 59, 999));
    }

    // Get aggregated data grouped by product and date
    const itemTransactions = await prisma.transactionItem.groupBy({
      by: ["productId"],
      where: {
        deletedAt: null,
        transaction: {
          deletedAt: null,
          createdAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      },
      _sum: {
        quantity: true,
        subTotal: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        _sum: {
          quantity: "desc", // Order by most sold items
        },
      },
    });

    // Get product details for each item
    const itemsWithDetails = await Promise.all(
      itemTransactions.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
          select: {
            name: true,
            price: true,
            productImgUrl: true,
            productCategory: {
              select: { id: true, name: true },
            },
          },
        });

        return {
          productId: item.productId,
          product,
          totalQuantitySold: item._sum.quantity || 0,
          totalRevenue: item._sum.subTotal || 0,
          transactionCount: item._count.id,
        };
      })
    );

    // Apply pagination
    const paginatedItems = itemsWithDetails.slice(
      (pageNumber - 1) * pageLimit,
      pageNumber * pageLimit
    );

    const totalItems = itemsWithDetails.length;

    res.status(200).json({
      success: true,
      message: "Success",
      type: "daily_items",
      transactions: paginatedItems,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllShiftTransactions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit, transaction_date, cashier_shift } = req.query;

    const pageNumber = page ? parseInt(page as string) : 1;
    const pageLimit = limit ? parseInt(limit as string) : 10;

    // Build date range
    let startDate: Date;
    let endDate: Date;

    if (transaction_date) {
      const date = new Date(transaction_date as string);
      startDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0
      );
      endDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        999
      );
    } else {
      const now = new Date();
      startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
      endDate = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59,
        999
      );
    }

    // Build where clause
    const whereClause: Prisma.CashierBalanceHistoryWhereInput = {
      deletedAt: null,
      startTime: { gte: startDate },
      endTime: { lte: endDate },
    };

    if (cashier_shift) {
      whereClause.cashier = { shift: cashier_shift as ShiftSession };
    }

    // Fetch shift histories
    const shiftHistories = await prisma.cashierBalanceHistory.findMany({
      where: whereClause,
      include: {
        cashier: {
          select: {
            firstName: true,
            lastName: true,
            shift: true,
          },
        },
        transaction: {
          select: {
            totalAmount: true,
            paymentType: true,
          },
        },
      },
      orderBy: { startTime: "desc" },
    });

    // Map and calculate totals
    const results = shiftHistories.map((history) => {
      const totalTransactions = history.transaction.length;
      const totalRevenue = history.transaction.reduce(
        (sum, t) => sum + t.totalAmount,
        0
      );
      const totalDebit = history.transaction
        .filter((t) => t.paymentType === "DEBIT")
        .reduce((sum, t) => sum + t.totalAmount, 0);

      return {
        id: history.id,
        cashierName: `${history.cashier.firstName} ${history.cashier.lastName || ""}`,
        shift: history.cashier.shift,
        startTime: history.startTime,
        endTime: history.endTime,
        startingCash: history.startingCash,
        endingCash: history.endingCash || 0,
        totalTransactions,
        totalRevenue,
        totalDebit,
      };
    });

    const totalItems = results.length;
    const paginatedItems = results.slice(
      (pageNumber - 1) * pageLimit,
      pageNumber * pageLimit
    );

    res.status(200).json({
      success: true,
      message: "Success",
      type: "cashier_shift_summary",
      transactions: paginatedItems,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
}
// export async function getAllCashierTransactions(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { page, limit, transaction_date, cashier_shift } = req.query;
//     const pageNumber = page ? parseInt(page as string) : 1;
//     const pageLimit = limit ? parseInt(limit as string) : 10;

//     const whereClause: Prisma.TransactionWhereInput = {
//       deletedAt: null,
//     };

//     if (cashier_shift) {
//       whereClause.cashier = {
//         shift: { in: [cashier_shift as ShiftSession] },
//       };
//     }

//     // Set date range
//     let startDate: Date;
//     let endDate: Date;

//     if (transaction_date) {
//       // Specific day
//       const date = new Date(transaction_date as string);
//       startDate = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate(),
//         0,
//         0,
//         0,
//         0
//       );
//       endDate = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate(),
//         23,
//         59,
//         59,
//         999
//       );
//     } else {
//       // Current month
//       const now = new Date();
//       startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
//       endDate = new Date(
//         now.getFullYear(),
//         now.getMonth() + 1,
//         0,
//         23,
//         59,
//         59,
//         999
//       );
//     }

//     // Get all transactions with cashier and balance info
//     const transactions = await prisma.transaction.findMany({
//       where: {
//         ...whereClause,
//         createdAt: {
//           gte: startDate,
//           lte: endDate,
//         },
//       },
//       include: {
//         cashier: {
//           select: {
//             firstName: true,
//             lastName: true,
//             shift: true,
//           },
//         },
//         cashierBalanceHistory: {
//           select: {
//             startingCash: true,
//             endingCash: true,
//           },
//         },
//       },
//     });

//     // Group by shift manually
//     const shiftGroups = transactions.reduce(
//       (acc, transaction) => {
//         const shift = transaction.cashier.shift;
//         const cashierName = `${transaction.cashier.firstName} ${transaction.cashier.lastName}`;

//         if (!acc[shift]) {
//           acc[shift] = {
//             shift,
//             totalRevenue: 0,
//             totalCash: 0,
//             totalDebit: 0,
//             transactionCount: 0,
//             cashierIds: new Set(),
//             cashierNames: new Set(),
//             startingCash: 0,
//             endingCash: 0,
//           };
//         }

//         acc[shift].totalRevenue += transaction.totalAmount;
//         acc[shift].transactionCount += 1;
//         acc[shift].cashierIds.add(transaction.cashierId);
//         acc[shift].cashierNames.add(cashierName);

//         // Add payment type totals
//         if (transaction.paymentType === "CASH") {
//           acc[shift].totalCash += transaction.totalAmount;
//         } else if (transaction.paymentType === "DEBIT") {
//           acc[shift].totalDebit += transaction.totalAmount;
//         }

//         // Add balance info (sum all cashiers' balances in this shift)
//         if (transaction.cashierBalanceHistory) {
//           acc[shift].startingCash +=
//             transaction.cashierBalanceHistory.startingCash;
//           acc[shift].endingCash +=
//             transaction.cashierBalanceHistory.endingCash || 0;
//         }

//         return acc;
//       },
//       {} as Record<
//         string,
//         {
//           shift: string;
//           totalRevenue: number;
//           totalCash: number;
//           totalDebit: number;
//           transactionCount: number;
//           cashierIds: Set<string>;
//           cashierNames: Set<string>;
//           startingCash: number;
//           endingCash: number;
//         }
//       >
//     );

//     // Convert to array and add cashier count
//     const shiftTransactions = Object.values(shiftGroups)
//       .map((group) => ({
//         shift: group.shift,
//         totalRevenue: group.totalRevenue,
//         totalCash: group.totalCash,
//         totalDebit: group.totalDebit,
//         transactionCount: group.transactionCount,
//         cashierCount: group.cashierIds.size,
//         cashierNames: Array.from(group.cashierNames),
//         startingCash: group.startingCash,
//         endingCash: group.endingCash,
//       }))
//       .sort((a, b) => b.totalRevenue - a.totalRevenue);

//     // Apply pagination
//     const paginatedItems = shiftTransactions.slice(
//       (pageNumber - 1) * pageLimit,
//       pageNumber * pageLimit
//     );
//     const totalItems = shiftTransactions.length;

//     res.status(200).json({
//       success: true,
//       message: "Success",
//       type: "shift_summary",
//       transactions: paginatedItems,
//       totalItems,
//     });
//   } catch (error) {
//     next(error);
//   }
// }
