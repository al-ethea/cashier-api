/*
  Warnings:

  - You are about to drop the `product_stocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."product_stocks" DROP CONSTRAINT "product_stocks_productId_fkey";

-- DropTable
DROP TABLE "public"."product_stocks";
