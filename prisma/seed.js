const bcrypt = require("bcrypt");
const { PrismaClient } = require("../src/generated/prisma");
const prisma = new PrismaClient();

const cashiers = [
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john@example.com",
  //   password: "password123", // will be hashed
  //   shift: "SHIFT2",
  // },
  // {
  //   firstName: "Jane",
  //   lastName: "Smith",
  //   email: "jane@example.com",
  //   password: "pass321",
  //   shift: "SHIFT1",
  // },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael@example.com",
    password: "pass123", // will be hashed
    shift: "SHIFT1",
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily@example.com",
    password: "pass123", // will be hashed
    shift: "SHIFT2",
  },
];

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

async function main() {
  for (const item of cashiers) {
    const hashed = await hashPassword(item.password);
    await prisma.cashier.create({
      data: {
        ...item,
        password: hashed,
      },
    });
  }
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
