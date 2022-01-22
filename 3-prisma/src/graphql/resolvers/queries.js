const Queries = {
  getAllUsers: async (_, __, { prisma }) => await prisma.user.findMany(),
  getAllPosts: async (_, __, { prisma }) => await prisma.post.findMany()
}

export default Queries