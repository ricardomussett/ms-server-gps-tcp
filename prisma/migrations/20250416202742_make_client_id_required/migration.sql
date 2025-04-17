/*
  Warnings:

  - Added the required column `clientId` to the `AlarmData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `HeartbeatData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `IButtonData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `PositionData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `TrackerStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlarmData" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HeartbeatData" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "IButtonData" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PositionData" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrackerStatus" ADD COLUMN     "clientId" TEXT NOT NULL;
