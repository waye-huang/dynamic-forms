/*
  Warnings:

  - You are about to drop the column `agentId` on the `Policy` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Policy" DROP CONSTRAINT "Policy_agentId_fkey";

-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "agentId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Policy" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
