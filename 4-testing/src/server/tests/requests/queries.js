import { gql } from 'apollo-boost'

export const meQuery = gql`
  query {
    me
  }
`

export const getUsers = gql`
  query {
    users: getAllUsers {
      id
      name
      email
    }
  }
`

export const getPosts = gql`
  query {
    posts: getPosts {
      id
      title
      body
      published
    }
  }
`

export const getComments = gql`
  query {
    comments: getAllComments {
      id
      text
    }
  }
`