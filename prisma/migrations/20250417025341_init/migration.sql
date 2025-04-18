-- CreateTable
CREATE TABLE "WhiteListPseudoIP" (
    "id" SERIAL NOT NULL,
    "PseudoIP" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhiteListPseudoIP_pkey" PRIMARY KEY ("id")
);
