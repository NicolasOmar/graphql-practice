import { v4 as uuid } from 'uuid'

const Mutation = {
  createUser: async (_, { username }, { prisma }) => (
    await prisma.user.create({
      data: { id: uuid(), username }
    })
  ),
  createBook: async (_, { bookData }, { prisma }) => (
    await (prisma.book.create({
      data: {
        ...bookData,
        id: uuid()
      }
    }))
  ),
  createReview: async(_, { reviewData }, { prisma }) => (
    await (
      prisma.review.create({
        data: {
          ...reviewData,
          id: uuid()
        }
      })
    )
  )
}

export default Mutation