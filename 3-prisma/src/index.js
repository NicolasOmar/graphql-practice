import { ApolloServer } from 'apollo-server'
import { PrismaClient } from '@prisma/client'
// SCHEMA
import typeDefs from './graphql/typeDefs'
// RESOLVERS
import Query from './graphql/resolvers/queries'
import Mutation from './graphql/resolvers/mutations'
import Relationships from './graphql/resolvers/relationships'

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    ...Relationships
  },
  context: async ({ req }) => (
    { prisma, request: req }
  )
})

server.listen().then(async ({ url }) => console.log(`Welcome to the page ${url}`))