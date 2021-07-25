import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
export default async function handle(req, res) {
  const { submitted, companyName, email, companyWebsite, yearsInBusiness, principalOperation, contractorsLicense, federalTaxIdNumber } = req.body
  const result = await prisma.policy.create({
    data: {
      submitted: submitted,
      companyName: companyName,
      companyWebsite: companyWebsite,
      yearsInBusiness: parseInt(yearsInBusiness),
      principalOperation: principalOperation,
      contractorsLicense: parseInt(contractorsLicense),
      federalTaxIdNumber: federalTaxIdNumber,
      agentId: 1,
    },
  })
  res.json(result)
}