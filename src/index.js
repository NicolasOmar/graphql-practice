import { GraphQLServer } from 'graphql-yoga'

const dummyPosts = [
  {
    id: 'A',
    title: 'Title of Post A',
    body: 'Body of Post A - A',
    published: true,
  }, {
    id: 'B',
    title: 'Title of Post B',
    body: 'Body of Post B - B',
    published: true,
  }, {
    id: 'C',
    title: 'Title of Post C',
    body: 'Body of Post C - C',
    published: false,
  }, {
    id: 'D',
    title: 'Title of Post D',
    body: 'Body of Post D - D',
    published: true,
  }
]

// Type definitions
const typeDefs = `
  type Query {
    me: User!
    greeting(name: String!, role: String): String!
    getPost: Post!
    getPosts(term: String): [Post]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    me: () => {
      return {
        id: '12536',
        name: 'Nicolás González',
        email: 'nicolas.passerino@gmail.com',
        age: 28,
      }
    },
    greeting: (parent, args) => `Hello ${args.role || 'User'} ${args.name}`,
    getPost: () => dummyPosts[0],
    getPosts: (parent, { term }) => {
      return term
        ? dummyPosts.filter(post => post.title.includes(term) || post.body.includes(term))
        : dummyPosts
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('The Server has started'))