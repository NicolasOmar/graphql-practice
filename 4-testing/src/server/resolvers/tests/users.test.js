import 'cross-fetch/polyfill'
import ApolloBoost, { gql } from 'apollo-boost'

const client = new ApolloBoost({ uri: 'http://localhost:4000' })

describe('Mutation | Users', () => {
  test('Should create a new user', async () => {
    const createUser = gql`
      mutation {
        createUser(
          user: {
            name: "Test",
            email: "Test",
            role: "Test"
          }
        ) {
          id
        }
      }
    `

    const response = await client.mutate({ mutation: createUser })
    expect(response.data.createUser.id).not.toBeNull()
  })
})