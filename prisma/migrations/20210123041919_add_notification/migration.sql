/*
  Warnings:

  - You are about to drop the column `wishListId` on the `slackNotifications` table. All the data in the column will be lost.
  - Added the required column `userId` to the `slackNotifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "slackNotifications" DROP CONSTRAINT "slackNotifications_wishListId_fkey";

-- AlterTable
ALTER TABLE "slackNotifications" DROP COLUMN "wishListId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "wishLists" ADD COLUMN     "slackNotificationId" TEXT;

-- AddForeignKey
ALTER TABLE "slackNotifications" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishLists" ADD FOREIGN KEY("slackNotificationId")REFERENCES "slackNotifications"("id") ON DELETE SET NULL ON UPDATE CASCADE;
