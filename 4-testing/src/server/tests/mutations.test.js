import 'cross-fetch/polyfill'
import ApolloBoost from 'apollo-boost'
// MUTATIONS AND QUERIES
import { createUser } from './requests/mutations'
import { getUsers } from './requests/queries'

const client = new ApolloBoost({ uri: 'http://localhost:4000' })

const checkProps = (data, props) => {
  data.forEach(
    item => {
      props.forEach(prop => expect(item[prop]).not.toBeNull())
    }
  )
}

describe('Mutations', () => {
  describe('Users', () => {
    test('Should create a new user', async () => {
      const { data } = await client.mutate({ mutation: createUser })
      checkProps([data.createUser], ['id', 'name', 'email'])
    })
  })
})

describe('Queries', () => {
  describe('Users', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getUsers })
      checkProps(data.users, ['id', 'name', 'email'])
      expect(data.users.length).toBe(5)
    })
  })
})