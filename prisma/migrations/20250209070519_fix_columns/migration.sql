/*
  Warnings:

  - You are about to drop the column `UpdatedAt` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Laptop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Laptop" DROP COLUMN "UpdatedAt",
DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
