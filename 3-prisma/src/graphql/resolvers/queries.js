import bcrypt from 'bcrypt'
import { authUser } from '../utils/auth'

const Queries = {
  getAllUsers: async (_, __, { prisma, request }) => authUser(request) && await prisma.user.findMany(),
  getAllBooks: async (_, __, { prisma, request }) => authUser(request) && await prisma.book.findMany(),
  getAllReviews: async (_, __, { prisma, request }) => authUser(request) && await prisma.review.findMany(),
  getUserById: async (_, { id }, { prisma, request }) => authUser(request) && await prisma.user.findUnique({ where: { id } }),
  getBookById: async (_, { id }, { prisma, request }) => authUser(request) && await prisma.book.findUnique({ where: { id } }),
  getReviewById: async (_, { id }, { prisma, request }) => authUser(request) && await prisma.review.findUnique({ where: { id } }),
  loginUser: async (_, { userData }, { prisma }) => {
    const user = await prisma.user.findUnique({ where: { username: userData.username }})
    return (await bcrypt.compare(userData.password, user.password) ? user : null)
  }
}

export default Queries