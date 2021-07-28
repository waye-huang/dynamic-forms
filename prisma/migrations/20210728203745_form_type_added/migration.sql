/*
  Warnings:

  - Added the required column `formType` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "formType" TEXT NOT NULL;
