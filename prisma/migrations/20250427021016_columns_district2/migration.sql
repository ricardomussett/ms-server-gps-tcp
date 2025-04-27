/*
  Warnings:

  - Made the column `color` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `district` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "district" SET NOT NULL;
