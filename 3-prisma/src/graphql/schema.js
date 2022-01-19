import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    addUser: User
  }

  type User {
    id: String!
    name: String!
  }
`

export default typeDefs