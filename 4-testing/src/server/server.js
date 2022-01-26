import { GraphQLServer, PubSub } from 'graphql-yoga'
// CREATE DATABASE ON THE FLY
import createDb from './db/data'
// RESOLVERS
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Relationships from './resolvers/Relationships'

const db = createDb(4)
const pubSub = new PubSub()
const server = new GraphQLServer({
  typeDefs: './src/server/schemas/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    ...Relationships
  },
  context: ({ request }) => ({
    db,
    pubSub,
    request
  })
})

export default server