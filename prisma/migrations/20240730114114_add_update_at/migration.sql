/*
  Warnings:

  - You are about to drop the column `charactorID` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `charactorID` on the `ChatRoom` table. All the data in the column will be lost.
  - Added the required column `characterID` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "charactorID",
ADD COLUMN     "characterID" TEXT,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "charactorID",
ADD COLUMN     "characterID" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
