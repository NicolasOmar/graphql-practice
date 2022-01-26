import 'cross-fetch/polyfill'
import jwt from 'jsonwebtoken'
import ApolloBoost from 'apollo-boost'
// MOCKS
import { _user, _post, _comment } from './mocks.json'
// MUTATIONS AND QUERIES FOR TESTING
import { getUsers, getPosts, getComments, meQuery } from './requests/queries'
// UTILS
import { checkPropsExists } from '../utils/checks'

const client = new ApolloBoost({
  uri: 'http://localhost:4000',
  request: (operation) => {
    operation.setContext({
      headers: {
        auth: jwt.sign({ email: _user.mock }, 'mySecret')
      }
    })
  }
})

describe('Queries', () => {
  describe('me', () => {
    test('Should return the logged user email', async () => {
      const { data } = await client.query({ query: meQuery })
      expect(data.me).not.toBeNull()
    })
  })

  describe('getAllUsers', () => {
    test('Should get all users', async () => {
      const { data } = await client.query({ query: getUsers })
      checkPropsExists(data.users, _user.checkProps)
      expect(data.users.length).toBe(4)
    })
  })
  
  describe('getPosts', () => {
    test('Should get all posts', async () => {
      const { data } = await client.query({ query: getPosts })
      checkPropsExists(data.posts, _post.checkProps)
      expect(data.posts.length).toBe(4)
    })
  })

  describe('getAllComments', () => {
    test('Should get all comments', async () => {
      const { data } = await client.query({ query: getComments })
      checkPropsExists(data.comments, _comment.checkProps)
      expect(data.comments.length).toBe(4)
    })
  })
})