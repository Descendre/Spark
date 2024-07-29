-- CreateEnum
CREATE TYPE "Speaker" AS ENUM ('USER', 'AI');

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "chatRoomId" TEXT NOT NULL,
    "speaker" "Speaker" NOT NULL,
    "styleType" INTEGER,
    "charactorID" TEXT,
    "context" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "roomName" TEXT NOT NULL,
    "charactorID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
