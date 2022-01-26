import 'cross-fetch/polyfill'
import ApolloBoost from 'apollo-boost'
// MOCKS
import { _user } from './mocks.json'
// MUTATIONS AND QUERIES FOR TESTING
import { getUsers } from './testRequests/queries'
// UTILS
import { checkPropsExists } from '../utils/checks'

const client = new ApolloBoost({ uri: 'http://localhost:4000' })

describe('Queries', () => {
  describe('Users', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getUsers })
      checkPropsExists(data.users, _user.checkProps)
      expect(data.users.length).toBe(4)
    })
  })
})