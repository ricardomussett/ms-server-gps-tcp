/*
  Warnings:

  - Added the required column `color` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL;
