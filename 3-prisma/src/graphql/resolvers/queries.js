const Queries = {
  getAllUsers: async (_, __, { prisma }) => await prisma.user.findMany(),
  getAllBooks: async (_, __, { prisma }) => await prisma.book.findMany(),
  getAllReviews: async (_, __, { prisma }) => await prisma.review.findMany()
}

export default Queries