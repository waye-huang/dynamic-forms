import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const postId = req.query.id

  if (req.method === 'GET') {
    handleGET(postId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(postId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(postId, res) {
  const post = await prisma.policy.findUnique({
    where: { id: Number(postId) },
    include: { userId: true },
  })
  res.json(post)
}

// DELETE /api/post/:id
async function handleDELETE(postId, res) {
  const post = await prisma.policy.delete({
    where: { id: Number(postId) },
  })

  res.json(post)
}
