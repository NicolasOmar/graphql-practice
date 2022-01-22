const Relationships = {
  User: {
    posts: async ({ id }, _, { prisma }) => await prisma.post.findMany({ where: { userId: id }})
  },
  Post: {
    author: async ({ userId }, _, { prisma }) => await prisma.user.findUnique({ where: { id: userId } })
  }
}

export default Relationships