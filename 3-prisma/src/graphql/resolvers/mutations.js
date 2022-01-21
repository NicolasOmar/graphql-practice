import { v4 as uuid } from 'uuid'

const Mutation = {
  addUser: async (_, { name }, { prisma }) => {
    const payload = {
      data: { id: uuid(), name }
    }
    return (await prisma.user.create(payload))
  }
}

export default Mutation