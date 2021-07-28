/*
  Warnings:

  - The `contractorsLicense` column on the `Policy` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `federalTaxIdNumber` column on the `Policy` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "contractorsLicense",
ADD COLUMN     "contractorsLicense" INTEGER,
DROP COLUMN "federalTaxIdNumber",
ADD COLUMN     "federalTaxIdNumber" INTEGER;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;
