import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { authUser } from '../utils/auth'

const create = async (entity, payload, prisma) => await prisma[entity].create({ data: { ...payload, id: uuid() }})
const deleteRegistry = async (entity, id, prisma) => await prisma[entity].delete({ where: { id } })

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