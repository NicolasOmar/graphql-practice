import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server'
// SCHEMA
import typeDefs from './graphql/schema'
// RESOLVERS
import Query from './resolvers/queries'
import Mutation from './resolvers/mutations'

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: {
    prisma
  }
})

server.listen().then(async ({ url }) => console.log(`Welcome to the page ${url}`))