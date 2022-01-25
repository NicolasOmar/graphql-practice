import { gql } from 'apollo-boost'
import { _user, _post, _comment } from '../users.mocks.json'

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