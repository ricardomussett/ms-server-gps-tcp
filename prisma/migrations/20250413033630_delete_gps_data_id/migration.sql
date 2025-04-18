/*
  Warnings:

  - You are about to drop the column `gpsDataId` on the `AlarmData` table. All the data in the column will be lost.
  - You are about to drop the column `gpsDataId` on the `HeartbeatData` table. All the data in the column will be lost.
  - You are about to drop the column `gpsDataId` on the `IButtonData` table. All the data in the column will be lost.
  - You are about to drop the column `gpsDataId` on the `PositionData` table. All the data in the column will be lost.
  - You are about to drop the column `gpsDataId` on the `TrackerStatus` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlarmData" DROP CONSTRAINT "AlarmData_gpsDataId_fkey";

-- DropForeignKey
ALTER TABLE "HeartbeatData" DROP CONSTRAINT "HeartbeatData_gpsDataId_fkey";

-- DropForeignKey
ALTER TABLE "IButtonData" DROP CONSTRAINT "IButtonData_gpsDataId_fkey";

-- DropForeignKey
ALTER TABLE "PositionData" DROP CONSTRAINT "PositionData_gpsDataId_fkey";

-- DropForeignKey
ALTER TABLE "TrackerStatus" DROP CONSTRAINT "TrackerStatus_gpsDataId_fkey";

-- DropIndex
DROP INDEX "AlarmData_gpsDataId_key";

-- DropIndex
DROP INDEX "HeartbeatData_gpsDataId_key";

-- DropIndex
DROP INDEX "IButtonData_gpsDataId_key";

-- DropIndex
DROP INDEX "PositionData_gpsDataId_key";

-- DropIndex
DROP INDEX "TrackerStatus_gpsDataId_key";

-- AlterTable
ALTER TABLE "AlarmData" DROP COLUMN "gpsDataId";

-- AlterTable
ALTER TABLE "HeartbeatData" DROP COLUMN "gpsDataId";

-- AlterTable
ALTER TABLE "IButtonData" DROP COLUMN "gpsDataId";

-- AlterTable
ALTER TABLE "PositionData" DROP COLUMN "gpsDataId";

-- AlterTable
ALTER TABLE "TrackerStatus" DROP COLUMN "gpsDataId";
