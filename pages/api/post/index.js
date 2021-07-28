import prisma from '../../../lib/prisma'

// POST /api/post
export default async function handle(req, res) {

  const {authCookie} = req.body;
  if (authCookie !== 'shepherd') {
  console.log('auth cookie not a match!'); return;} 
  let {user, primaryEmail} = req.body;
  user = { create: {email: 'wei@gmail.com'}};
  const newBody = {user, ...req.body}

  const result = await prisma.policy.create({
    data: {
    ...newBody
    },
  })
  console.log(`Form saved in DB -> `);
  console.dir(result);
  res.json(result)
}