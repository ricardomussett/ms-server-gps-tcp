-- CreateTable
CREATE TABLE "GpsData" (
    "id" SERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "rawData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GpsData_pkey" PRIMARY KEY ("id")
);
