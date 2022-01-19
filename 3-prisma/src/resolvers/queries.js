const Queries = {
  getAllUsers: async (_, __, { prisma }) => await prisma.user.findMany()
}

export default Queries