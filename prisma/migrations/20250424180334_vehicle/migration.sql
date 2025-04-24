/*
  Warnings:

  - Changed the type of `isActive` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "isActive",
ADD COLUMN     "isActive" BOOLEAN NOT NULL;
