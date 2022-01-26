import { gql } from 'apollo-boost'
import { _user, _post, _comment } from '../mocks.json'

export const createUser = (user = _user.mock) => (
  gql`
    mutation {
      createUser(
        user: {
          name: "${user?.name}"
          email: "${user?.email}"
          age: ${user?.age}
        }
      ) {
        id
        name
        email
      }
    }
  `
)

export const createPost = (post = _post.mock) => (
  gql`
    mutation {
      createPost(
        post: {
          title: "${post?.title}"
          body: "${post?.body}"
          published: ${post?.published}
          author: "${post?.author}"
        }
      ) {
        id
        title
        body
        published
      }
    }
  `
)

export const createComment = (comment = _comment.mock) => (
  gql`
    mutation {
      createComment (
        comment: {
          text: "${comment?.text}"
          author: "${comment?.author}"
          post: "${comment?.post}"
        }
      ) {
        id
        text
      }
    }
  `
)

export const deleteUser = (id = null) => (
  gql`
    mutation {
      deleteUser(
        id: "${id}"
      ) {
        id
        name
        email
      }
    }
  `
)

export const deletePost = (id = null) => (
  gql`
    mutation {
      deletePost(
        id: "${id}"
      ) {
        id
        title
        body
        published
      }
    }
  `
)

export const deleteComment = (id = null) => (
  gql`
    mutation {
      deleteComment(
        id: "${id}"
      ) {
        id
        text
      }
    }
  `
)

export const updateUser = (id = null, _data = _user.updatedMock) => (
  gql`
    mutation {
      updateUser(
        id: "${id}",
        data: {
          name: "${_data?.name}"
          email: "${_data?.email}"
          age: ${_data?.age}
        }
      ) {
        id
        name
        email
      }
    }
  `
)

export const updatePost = (id = null, _data = _post.updatedMock) => (
  gql`
    mutation {
      updatePost(
        id: "${id}",
        data: {
          title: "${_data?.title}"
          body: "${_data?.body}"
          published: ${_data?.published}
        }
      ) {
        id
        title
        body
        published
      }
    }
  `
)

export const updateComment = (id = null, _data = _comment.updatedMock) => (
  gql`
    mutation {
      updateComment(
        id: "${id}",
        data: {
          text: "${_data?.text}"
        }
      ) {
        text
      }
    }
  `
)