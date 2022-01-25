import { gql } from 'apollo-boost'

export const getUsers = gql`
  query {
    users: getAllUsers {
      id
      name
      email
    }
  }
`