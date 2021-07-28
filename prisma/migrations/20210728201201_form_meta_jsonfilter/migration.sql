/*
  Warnings:

  - You are about to drop the column `companyName` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `companyWebsite` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `contractorsLicense` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `developer_name` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `federalTaxIdNumber` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `lender_name` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `primaryEmail` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `principalOperation` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `yearsInBusiness` on the `Policy` table. All the data in the column will be lost.
  - Added the required column `formMetadata` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "companyName",
DROP COLUMN "companyWebsite",
DROP COLUMN "contractorsLicense",
DROP COLUMN "developer_name",
DROP COLUMN "federalTaxIdNumber",
DROP COLUMN "lender_name",
DROP COLUMN "primaryEmail",
DROP COLUMN "principalOperation",
DROP COLUMN "yearsInBusiness",
ADD COLUMN     "formMetadata" JSONB NOT NULL;
