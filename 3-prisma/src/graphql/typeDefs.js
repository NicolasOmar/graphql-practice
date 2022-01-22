import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
  }

  type Mutation {
    addUser(name: String!): User
    addPost(post: CreatePostInput!): Post
  }
  
  type User {
    id: String!
    name: String!
    posts: [Post]
  }

  type Post {
    id: String!
    title: String
    body: String
    published: Boolean
    userId: String!
    author: User!
  }

  input CreatePostInput {
    title: String!
    body: String
    published: Boolean
    author: String!
  }
`

export default typeDefs