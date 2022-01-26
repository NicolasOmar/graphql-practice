import 'cross-fetch/polyfill'
import ApolloBoost from 'apollo-boost'
// MOCKS
import { _user, _post, _comment } from './mocks.json'
// MUTATIONS AND QUERIES FOR TESTING
import { createComment, createPost, createUser, deletePost, deleteUser, deleteComment, updateUser, updatePost, updateComment } from './requests/mutations'
import { getComments, getPosts, getUsers } from './requests/queries'
// UTILS
import { checkPropsExists } from '../utils/checks'

let users = null
let posts = null
let comments = null
const client = new ApolloBoost({ uri: 'http://localhost:4000' })

beforeAll(async () => {
  users = [...(await client.query({ query: getUsers })).data.users]
  posts = [...(await client.query({ query: getPosts })).data.posts]
  comments = [...(await client.query({ query: getComments })).data.comments]
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
      const payload = { ..._post.mock, author: users[0].id }
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
        author: users[0].id,
        post: posts[0].id
      }
      const { data } = await client.mutate({ mutation: createComment(payload) })
      checkPropsExists([data.createComment], _comment.checkProps)
    })

    test('Should throw an Error trying to create a Comment with a null Author and/or Post', () => {
      const errorMocks = [
        { ..._comment.mock, author: users[0].id },
        { ..._comment.mock, post: posts[0].id }
      ]

      errorMocks.forEach(
        async (mock) => (
          await expect(client.mutate({ mutation: createComment(mock) })).rejects.toThrow()
        )
      )
    })
  })
  
  describe('deleteUser', () => {
    test('Should delete the first User', async () => {
      const { data } = await client.mutate({ mutation: deleteUser(users[0].id) })
      checkPropsExists([data.deleteUser], _user.checkProps)
    })

    test('Should throw an Error trying to delete an already removed User', async () => {
      await expect(client.mutate({ mutation: deleteUser(users[0].id) })).rejects.toThrow()
      await expect(client.mutate({ mutation: deleteUser() })).rejects.toThrow()
    })
  })

  describe('deletePost', () => {
    test('Should delete the first Post', async () => {
      const { data } = await client.mutate({ mutation: deletePost(posts[1].id) })
      checkPropsExists([data.deletePost], _post.checkProps)
    })

    test('Should throw an Error trying to delete an already removed Post', async () => {
      await expect(client.mutate({ mutation: deletePost(posts[0].id) })).rejects.toThrow()
      await expect(client.mutate({ mutation: deletePost() })).rejects.toThrow()
    })
  })

  describe('deleteComment', () => {
    test('Should delete the first Post', async () => {
      const { data } = await client.mutate({ mutation: deleteComment(comments[0].id) })
      checkPropsExists([data.deleteComment], _comment.checkProps)
    })

    test('Should throw an Error trying to delete an already removed Post', async () => {
      await expect(client.mutate({ mutation: deleteComment(comments[0].id) })).rejects.toThrow()
      await expect(client.mutate({ mutation: deleteComment() })).rejects.toThrow()
    })
  })

  describe('updateUser', () => {
    test('Should update the second User', async () => {
      const { data } = await client.mutate({ mutation: updateUser(users[1].id)})
      checkPropsExists([data.updateUser], _user.checkProps)
    })

    test('Should trown an Error when you want to update a removed User', async () => {
      await expect(client.mutate({ mutation: updateUser() })).rejects.toThrow()
      await expect(client.mutate({ mutation: updateUser(users[0].id) })).rejects.toThrow()
    })

    test('Should trown an Error when you want to update a User with an already taken email', async () => {
      await expect(client.mutate({ mutation: updateUser(users[1].id) })).rejects.toThrow()
    })
  })

  describe('updatePost', () => {
    test('Should update the third Post', async () => {
      const { data } = await client.mutate({ mutation: updatePost(posts[2].id)})
      checkPropsExists([data.updatePost], _post.checkProps)
    })

    test('Should trown an Error when you want to update a removed Post', async () => {
      await expect(client.mutate({ mutation: updatePost() })).rejects.toThrow()
      await expect(client.mutate({ mutation: updatePost(posts[0].id) })).rejects.toThrow()
      await expect(client.mutate({ mutation: updatePost(posts[1].id) })).rejects.toThrow()
    })
  })

  describe('updateComment', () => {
    test('Should update the third Comment', async () => {
      const { data } = await client.mutate({ mutation: updateComment(comments[2].id)})
      checkPropsExists([data.updateComment], _comment.checkProps)
    })

    test('Should trown an Error when you want to update a removed Comment', async () => {
      await expect(client.mutate({ mutation: updateComment() })).rejects.toThrow()
      await expect(client.mutate({ mutation: updateComment(comments[0].id) })).rejects.toThrow()
      await expect(client.mutate({ mutation: updateComment(comments[1].id) })).rejects.toThrow()
    })
  })
})