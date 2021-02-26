import { GraphQLServer } from 'graphql-yoga'
import { v4 as uuidv4 } from 'uuid'
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

  type Mutation {
    createUser(user: CreateUserInput): User!
    createPost(post: CreatePostInput): Post!
    createComment(comment: CreateCommentInput): Comment!
  }

  input CreateUserInput {
    name: String!
    email: String!
    role: String
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
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
  Mutation: {
    createUser: (parent, args) => {
      const emailTaken = users.some(({ email }) => email === args.email)

      if (emailTaken) {
        throw new Error('The Email has been taken')
      } else {
        const newUser = {
          id: uuidv4(),
          name: args.name,
          email: args.email,
          age: args.age
        }

        users.push(newUser)
        return newUser
      }
    },
    createPost:(parent, args) => {
      const userExists = users.some(({ id }) => id === args.author)

      if (userExists) {
        const newPost = {
          id: uuidv4(),
          title: args.title,
          body: args.body,
          published: args.published,
          author: args.author
        }

        posts.push(newPost)

        return newPost
      } else {
        throw new Error('User not found')
      }
    },
    createComment:(
      parent,
      { text, author,post }
    ) => {
      const userExists = users.some(({ id }) => id === author)
      const postExists = posts.some(({ id }) => id === post)

      if(userExists && postExists) {
        const newComment = {
          id: uuidv4(),
          text,
          author,
          post
        }
        comments.push(newComment)

        return newComment
      }

    }
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