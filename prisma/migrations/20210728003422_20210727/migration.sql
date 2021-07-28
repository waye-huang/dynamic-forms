/*
  Warnings:

  - Added the required column `authCookie` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryEmail` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "authCookie" TEXT NOT NULL,
ADD COLUMN     "primaryEmail" TEXT NOT NULL,
ALTER COLUMN "contractorsLicense" SET DATA TYPE TEXT;
