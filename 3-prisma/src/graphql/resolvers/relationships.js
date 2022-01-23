const Relationships = {
  User: {
    reviews: async ({ id }, _, { prisma }) => await prisma.review.findMany({ where: { userId: id }})
  },
  Book: {
    reviews: async ({ id }, _, { prisma }) => await prisma.review.findMany({ where: { bookId: id } })
  },
  Review: {
    author: async ({ userId }, _, { prisma }) => await prisma.user.findUnique({ where: { id: userId}}),
    book: async ({ bookId }, _, { prisma }) => await prisma.book.findUnique({ where: { id: bookId}})
  }
}

export default Relationships