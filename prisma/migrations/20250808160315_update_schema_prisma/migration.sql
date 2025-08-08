/*
  Warnings:

  - You are about to drop the column `emailChangeCount` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetCount` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `product_categories` table. All the data in the column will be lost.
  - You are about to drop the column `paymentAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emailChangeCount` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetCount` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `shiftId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shifts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaction_histories` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cartId]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerName` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashierBalanceHistoryId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashierId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ShiftSession" AS ENUM ('SHIFT1', 'SHIFT2');

-- CreateEnum
CREATE TYPE "public"."CartStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- DropForeignKey
ALTER TABLE "public"."transaction_histories" DROP CONSTRAINT "transaction_histories_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."users" DROP CONSTRAINT "users_shiftId_fkey";

-- DropIndex
DROP INDEX "public"."carts_cashierId_key";

-- AlterTable
ALTER TABLE "public"."admins" DROP COLUMN "emailChangeCount",
DROP COLUMN "passwordResetCount";

-- AlterTable
ALTER TABLE "public"."carts" ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "status" "public"."CartStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "public"."product_categories" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "public"."transactions" DROP COLUMN "paymentAmount",
ADD COLUMN     "cartId" TEXT NOT NULL,
ADD COLUMN     "cashierBalanceHistoryId" TEXT NOT NULL,
ADD COLUMN     "cashierId" TEXT NOT NULL,
ADD COLUMN     "changeAmount" DOUBLE PRECISION,
ADD COLUMN     "debitCardNumber" TEXT,
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "dateOfBirth",
DROP COLUMN "emailChangeCount",
DROP COLUMN "passwordResetCount",
DROP COLUMN "shiftId",
ADD COLUMN     "shift" "public"."ShiftSession" NOT NULL;

-- DropTable
DROP TABLE "public"."samples";

-- DropTable
DROP TABLE "public"."shifts";

-- DropTable
DROP TABLE "public"."transaction_histories";

-- CreateTable
CREATE TABLE "public"."cashier_shift_histories" (
    "id" TEXT NOT NULL,
    "cashierId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "startingCash" DOUBLE PRECISION NOT NULL,
    "endingCash" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "cashier_shift_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cart_items" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transaction_items" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "transaction_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_cartId_key" ON "public"."transactions"("cartId");

-- AddForeignKey
ALTER TABLE "public"."cashier_shift_histories" ADD CONSTRAINT "cashier_shift_histories_cashierId_fkey" FOREIGN KEY ("cashierId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cart_items" ADD CONSTRAINT "cart_items_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "public"."carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cart_items" ADD CONSTRAINT "cart_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "public"."carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_cashierId_fkey" FOREIGN KEY ("cashierId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_cashierBalanceHistoryId_fkey" FOREIGN KEY ("cashierBalanceHistoryId") REFERENCES "public"."cashier_shift_histories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction_items" ADD CONSTRAINT "transaction_items_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "public"."transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction_items" ADD CONSTRAINT "transaction_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
