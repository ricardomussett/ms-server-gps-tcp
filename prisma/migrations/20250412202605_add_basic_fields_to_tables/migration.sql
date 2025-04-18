-- AlterTable
ALTER TABLE "AlarmData" ADD COLUMN     "mainCommand" TEXT,
ADD COLUMN     "packetLength" INTEGER,
ADD COLUMN     "pseudoIP" TEXT,
ADD COLUMN     "rawData" TEXT;

-- AlterTable
ALTER TABLE "HeartbeatData" ADD COLUMN     "mainCommand" TEXT,
ADD COLUMN     "packetLength" INTEGER,
ADD COLUMN     "pseudoIP" TEXT,
ADD COLUMN     "rawData" TEXT;

-- AlterTable
ALTER TABLE "IButtonData" ADD COLUMN     "mainCommand" TEXT,
ADD COLUMN     "packetLength" INTEGER,
ADD COLUMN     "pseudoIP" TEXT,
ADD COLUMN     "rawData" TEXT;

-- AlterTable
ALTER TABLE "PositionData" ADD COLUMN     "mainCommand" TEXT,
ADD COLUMN     "packetLength" INTEGER,
ADD COLUMN     "pseudoIP" TEXT,
ADD COLUMN     "rawData" TEXT;

-- AlterTable
ALTER TABLE "TrackerStatus" ADD COLUMN     "mainCommand" TEXT,
ADD COLUMN     "packetLength" INTEGER,
ADD COLUMN     "pseudoIP" TEXT,
ADD COLUMN     "rawData" TEXT;
