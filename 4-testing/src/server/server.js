import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db/data'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

const pubSub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/server/schemas/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
  },
  context: {
    db,
    pubSub
  }
})

export default server