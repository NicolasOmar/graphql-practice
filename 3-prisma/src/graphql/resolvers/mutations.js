import { v4 as uuid } from 'uuid'

const Mutation = {
  addUser: async (_, { name }, { prisma }) => (
    await prisma.user.create({
      data: { id: uuid(), name }
    })
  ),
  addPost: async (_, { post }, { prisma }) => (
    await (prisma.post.create({
      data: {
        id: uuid(),
        title: post.title ?? null,
        body: post.body ?? null,
        published: post.published ?? false,
        userId: post.author
      }
    }))
  )
}

export default Mutation