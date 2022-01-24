import { v4 as uuid } from 'uuid'

const constructConfig = ({ id = null, page = 1, rows = 1 }) => (
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
        skip: page === 1 ? 0 : ((page - 1) * rows)
      }
    }
  }
)

export const find = ({ prisma, entity, id = null, page = 1, rows = 1 }) => {
  const { unique, all } = constructConfig({ id, page, rows })
  const { fn, config } = id ? unique : all

  return prisma[entity][fn]({ ...config })
}

export const create = (entity, payload, prisma) => prisma[entity].create({ data: { ...payload, id: uuid() } })

export const deleteRegistry = (entity, id, prisma) => prisma[entity].delete({ where: { id } })