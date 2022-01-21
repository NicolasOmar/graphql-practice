import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    addUser(name: String!): User
  }

  type User {
    id: String!
    name: String!
  }

  type Post {
    id: String!
    title: String
    body: String
    published: Boolean
  }
`

export default typeDefs