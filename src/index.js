import { GraphQLServer } from 'graphql-yoga'
import { comments, posts, users } from './data'

// Type definitions
const typeDefs = `
  type Query {
    me: User!
    greeting(name: String!, role: String): String!
    getAllUsers: [User!]!
    getPosts(term: String): [Post]!
    getAllComments: [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`

// Resolvers
const resolvers = {
  Query: {
    me: () => users[0],
    greeting: (parent, args) => `Hello ${args.role || 'User'} ${args.name}`,
    getAllUsers: () => [...users],
    getPosts: (parent, { term }) => {
      return term
        ? posts.filter(post => post.title.includes(term) || post.body.includes(term))
        : posts
    },
    getAllComments: () => [...comments]
  },
  User: {
    posts: parent => posts.filter(({ author }) => author === parent.id),
    comments: parent => comments.filter(({ author }) => author === parent.id)
  },
  Post: {
    author: parent => users.find(({ id }) => id === parent.author),
    comments: parent => comments.filter(({ post }) => post === parent.id)
  },
  Comment: {
    author: parent => users.find(({ id }) => id === parent.author),
    post: parent => posts.find(({ id }) => id === parent.post)
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('The Server has started'))