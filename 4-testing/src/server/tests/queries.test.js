import 'cross-fetch/polyfill'
import ApolloBoost from 'apollo-boost'
// MOCKS
import { _user, _post, _comment } from './mocks.json'
// MUTATIONS AND QUERIES FOR TESTING
import { getUsers, getPosts, getComments } from './requests/queries'
// UTILS
import { checkPropsExists } from '../utils/checks'

const client = new ApolloBoost({ uri: 'http://localhost:4000' })

describe('Queries', () => {
  describe('getAllUsers', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getUsers })
      checkPropsExists(data.users, _user.checkProps)
      expect(data.users.length).toBe(4)
    })
  })
  
  describe('getPosts', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getPosts })
      checkPropsExists(data.posts, _post.checkProps)
      expect(data.posts.length).toBe(4)
    })
  })

  describe('getAllComments', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getComments })
      checkPropsExists(data.comments, _comment.checkProps)
      expect(data.comments.length).toBe(4)
    })
  })
})