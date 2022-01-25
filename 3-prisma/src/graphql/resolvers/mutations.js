import bcrypt from 'bcrypt'
// UTILS
import { authUser } from '../utils/auth'
import { prismaCreate, prismaDelete } from '../utils/prisma'

const Mutation = {
  createUser: async (_, { userData }, { prisma }) => {
    const password = (await bcrypt.hash(userData.password, 5))
    return await prismaCreate('user', { ...userData, password }, prisma)
  },
  createBook: async (_, { bookData }, { prisma, request }) => authUser(request) && await prismaCreate('book', bookData, prisma),
  createReview: async(_, { reviewData }, { prisma, request }) => authUser(request) && await prismaCreate('review', reviewData, prisma),
  deleteUser: async (_, { id }, { prisma, request }) => authUser(request) && await prismaDelete('user', id, prisma),
  deleteBook: async (_, { id }, { prisma, request }) => authUser(request) && await prismaDelete('book', id, prisma),
  deleteReview: async(_, { id }, { prisma, request }) => authUser(request) && await prismaDelete('review', id, prisma)
}

export default Mutation