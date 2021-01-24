/*
  Warnings:

  - You are about to drop the column `slackNotificationId` on the `wishLists` table. All the data in the column will be lost.
  - You are about to drop the `slackNotifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Service" AS ENUM ('DISCORD');

-- DropForeignKey
ALTER TABLE "slackNotifications" DROP CONSTRAINT "slackNotifications_userId_fkey";

-- DropForeignKey
ALTER TABLE "wishLists" DROP CONSTRAINT "wishLists_slackNotificationId_fkey";

-- AlterTable
ALTER TABLE "wishLists" DROP COLUMN "slackNotificationId",
ADD COLUMN     "incomingWebhookId" TEXT;

-- CreateTable
CREATE TABLE "incomingWebhooks" (
    "id" TEXT NOT NULL,
    "incomingWebhookUrl" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "service" "Service" NOT NULL DEFAULT E'DISCORD',
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "slackNotifications";

-- AddForeignKey
ALTER TABLE "incomingWebhooks" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishLists" ADD FOREIGN KEY("incomingWebhookId")REFERENCES "incomingWebhooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
