import bcrypt from 'bcrypt'
// UTILS
import { authUser } from '../utils/auth'
import { create, deleteRegistry } from '../utils/prisma'

const Mutation = {
  createUser: async (_, { userData }, { prisma }) => {
    const password = (await bcrypt.hash(userData.password, 5))
    return await create('user', { ...userData, password }, prisma)
  },
  createBook: async (_, { bookData }, { prisma, request }) => authUser(request) && await create('book', bookData, prisma),
  createReview: async(_, { reviewData }, { prisma, request }) => authUser(request) && await create('review', reviewData, prisma),
  deleteUser: async (_, { id }, { prisma, request }) => authUser(request) && await deleteRegistry('user', id, prisma),
  deleteBook: async (_, { id }, { prisma, request }) => authUser(request) && await deleteRegistry('book', id, prisma),
  deleteReview: async(_, { id }, { prisma, request }) => authUser(request) && await deleteRegistry('review', id, prisma)
}

export default Mutation