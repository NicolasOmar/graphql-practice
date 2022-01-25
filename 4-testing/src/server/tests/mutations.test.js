import 'cross-fetch/polyfill'
import ApolloBoost from 'apollo-boost'
// MOCKS
import { _user, _post, _comment } from './users.mocks.json'
// MUTATIONS AND QUERIES FOR TESTING
import { createComment, createPost, createUser } from './testRequests/mutations'
import { getPosts, getUsers } from './testRequests/queries'
// UTILS
import { checkPropsExists } from '../utils/checks'

let firstUser = null
let firstPost = null
const client = new ApolloBoost({ uri: 'http://localhost:4000' })

beforeAll(async () => {
  firstUser = (await client.query({ query: getUsers })).data.users[0]
  firstPost = (await client.query({ query: getPosts })).data.posts[0]
})

describe('Mutations', () => {
  describe('createUser', () => {
    test('Should create a new user', async () => {
      const { data } = await client.mutate({ mutation: createUser() })
      checkPropsExists([data.createUser], _user.checkProps)
    })

    test('Should throw an Error trying to use an already used email', async () => {
      await expect(client.mutate({ mutation: createUser() })).rejects.toThrow()
    })
  })

  describe('createPost', () => {
    test('Should create a new Post', async () => {
      const payload = { ..._post.mock, author: firstUser.id }
      const { data } = await client.mutate({ mutation: createPost(payload)})
      checkPropsExists([data.createPost], _post.checkProps)
    })

    test('Should throw an Error trying to create a Post with a null Author', async () => {
      await expect(client.mutate({ mutation: createPost() })).rejects.toThrow()
    })
  })

  describe('createComment', () => {
    test('Should create a new Comment', async () => {
      const payload = {
        ..._comment.mock,
        author: firstUser.id,
        post: firstPost.id
      }
      const { data } = await client.mutate({ mutation: createComment(payload) })
      checkPropsExists([data.createComment], _comment.checkProps)
    })

    test('Should throw an Error trying to create a Comment with a null Author and/or Post', () => {
      const errorMocks = [
        { ..._comment.mock, author: firstUser.id },
        { ..._comment.mock, post: firstPost.id }
      ]

      errorMocks.forEach(
        async (mock) => (
          await expect(client.mutate({ mutation: createComment(mock) })).rejects.toThrow()
        )
      )
    })
  })
})

describe('Queries', () => {
  describe('Users', () => {
    test('Should expose public author profiles', async () => {
      const { data } = await client.query({ query: getUsers })
      checkPropsExists(data.users, _user.checkProps)
      expect(data.users.length).toBe(4)
    })
  })
})