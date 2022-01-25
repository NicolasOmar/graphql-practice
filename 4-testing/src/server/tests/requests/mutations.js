import { gql } from 'apollo-boost'

export const createUser = gql`
  mutation {
    createUser(
      user: {
        name: "Test",
        email: "Test",
        role: "Test"
      }
    ) {
      id
      name
      email
    }
  }
`