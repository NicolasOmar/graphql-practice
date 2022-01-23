import { v4 as uuid } from 'uuid'

const create = async (entity, payload, prisma) => await prisma[entity].create({ data: { ...payload, id: uuid() }})

const deleteRegistry = async (entity, id, prisma) => await prisma[entity].delete({ where: { id } })

const Mutation = {
  createUser: async (_, { username }, { prisma }) => await create('user', { username }, prisma),
  createBook: async (_, { bookData }, { prisma }) => await create('book', bookData, prisma),
  createReview: async(_, { reviewData }, { prisma }) => await create('review', reviewData, prisma),
  deleteUser: async (_, { id }, { prisma }) => await deleteRegistry('user', id, prisma),
  deleteBook: async (_, { id }, { prisma }) => await deleteRegistry('book', id, prisma),
  deleteReview: async(_, { id }, { prisma }) => await deleteRegistry('review', id, prisma)
}

export default Mutation