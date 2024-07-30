/*
  Warnings:

  - The primary key for the `Chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `characterID` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `context` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `speaker` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `styleType` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Chat` table. All the data in the column will be lost.
  - The `id` column on the `Chat` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `characterID` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ChatRoom` table. All the data in the column will be lost.
  - Added the required column `content` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speakerType` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speakerUuid` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SpeakerType" AS ENUM ('USER', 'AI');

-- AlterTable
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_pkey",
DROP COLUMN "characterID",
DROP COLUMN "context",
DROP COLUMN "speaker",
DROP COLUMN "styleType",
DROP COLUMN "updatedAt",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "speakerStyle" INTEGER,
ADD COLUMN     "speakerType" "SpeakerType" NOT NULL,
ADD COLUMN     "speakerUuid" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Chat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "characterID",
DROP COLUMN "updatedAt",
ADD COLUMN     "speakerUuid" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Speaker";
