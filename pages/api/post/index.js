import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: , 
export default async function handle(req, res) {
  const {authCookie, submitted, companyName, email, companyWebsite, yearsInBusiness, principalOperation, contractorsLicense, federalTaxIdNumber } = req.body;
  console.log(`req.body.auth. ${req.body.authCookie}`);
  if (req.body.authCookie !== 'shepherd') {
    console.log('auth cookie not a match!'); return;} 
  const result = await prisma.policy.create({
    data: {
      isDraft: false,
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
  console.log(result);
  res.json(result)
}