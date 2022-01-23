const Queries = {
  getAllUsers: async (_, __, { prisma }) => await prisma.user.findMany(),
  getAllBooks: async (_, __, { prisma }) => await prisma.book.findMany(),
  getAllReviews: async (_, __, { prisma }) => await prisma.review.findMany(),
  getUserById: async (_, { id }, { prisma }) => await prisma.user.findUnique({ where: { id } }),
  getBookById: async (_, { id }, { prisma }) => await prisma.book.findUnique({ where: { id } }),
  getReviewById: async (_, { id }, { prisma }) => await prisma.review.findUnique({ where: { id } })
}

export default Queries