/*
  Warnings:

  - Added the required column `from` to the `GpsData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GpsData" ADD COLUMN     "from" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "redis" TEXT NOT NULL DEFAULT 'connected';
