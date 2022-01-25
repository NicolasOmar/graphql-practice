import { v4 as uuid } from 'uuid'

const constructConfig = ({ id = null, page = 1, rows = 1, orderBy = 'id', order = 'desc' }) => (
  {
    unique: {
      fn: 'findUnique',
      config: {
        where: { id }
      }
    },
    all: {
      fn: 'findMany',
      config: {
        take: rows,
        skip: page === 1 ? 0 : ((page - 1) * rows),
        orderBy: { [orderBy]: order }
      }
    }
  }
)

export const prismaRead = ({ prisma, entity, id = null, page = 1, rows = 1, orderBy = 'id', order = 'desc' }) => {
  const { unique, all } = constructConfig({ id, page, rows, orderBy, order })
  const { fn, config } = id ? unique : all

  return prisma[entity][fn]({ ...config })
}

export const prismaCreate = (entity, payload, prisma) => prisma[entity].prismaCreate({ data: { ...payload, id: uuid() } })

export const prismaDelete = (entity, id, prisma) => prisma[entity].delete({ where: { id } })