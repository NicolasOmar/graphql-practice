import bcrypt from 'bcrypt'
// UTILS
import { authUser } from '../utils/auth'
import { find } from '../utils/prisma'

const Queries = {
  getAllUsers: async (_, { query }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'user', ...query }),
  getAllBooks: async (_, { query }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'book', ...query }),
  getAllReviews: async (_, { query }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'review', ...query }),
  getUserById: async (_, { id }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'user', id }),
  getBookById: async (_, { id }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'book', id }),
  getReviewById: async (_, { id }, { prisma, request }) => authUser(request) && await find({ prisma, entity: 'review', id }),
  loginUser: async (_, { userData }, { prisma }) => {
    const user = await prisma.user.findUnique({ where: { username: userData.username }})
    return (await bcrypt.compare(userData.password, user.password) ? user : null)
  }
}

export default Queries