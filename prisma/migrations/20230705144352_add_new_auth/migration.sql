/*
  Warnings:

  - You are about to drop the column `images` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `priceForNight` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `topics` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `purchage` on the `TripReservation` table. All the data in the column will be lost.
  - Added the required column `countryCode` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerDay` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPaid` to the `TripReservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "images",
DROP COLUMN "priceForNight",
DROP COLUMN "topics",
ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "highlights" TEXT[],
ADD COLUMN     "imagesUrl" TEXT[],
ADD COLUMN     "pricePerDay" DECIMAL(8,2) NOT NULL,
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TripReservation" DROP COLUMN "purchage",
ADD COLUMN     "totalPaid" DECIMAL(8,2) NOT NULL;
