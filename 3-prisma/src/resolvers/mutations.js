import { v4 as uuid } from 'uuid'

const Mutation = {
  addUser: async (_, __, { prisma }) => {
    console.log('test')
    await prisma.user.create({
      data: {
        id: uuid(),
        name: 'test'
      }
    })
    return null
  }
}

export default Mutation