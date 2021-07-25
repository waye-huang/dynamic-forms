-- CreateTable
CREATE TABLE "Policy" (
    "id" SERIAL NOT NULL,
    "isDraft" BOOLEAN NOT NULL DEFAULT true,
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "companyName" TEXT NOT NULL,
    "companyWebsite" TEXT NOT NULL,
    "yearsInBusiness" INTEGER NOT NULL,
    "principalOperation" TEXT NOT NULL,
    "contractorsLicense" INTEGER NOT NULL,
    "federalTaxIdNumber" TEXT NOT NULL,
    "agentId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Policy" ADD FOREIGN KEY ("agentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
