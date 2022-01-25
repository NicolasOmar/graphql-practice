import { datatype } from 'faker'

const Mutation = {
  createUser: (_, { user }, { db } ) => {
    const { name, email, age } = user
    const emailTaken = db.users.some(({ email }) => email === user.email)

    if (emailTaken) {
      throw new Error('The Email has been taken')
    } else {
      const newUser = {
        id: datatype.uuid(),
        name,
        email,
        age
      }

      db.users.push(newUser)
      return newUser
    }
  },
  createPost:(_, { post }, { db, pubSub }) => {
    const { title, body, published, author } = post
    const userExists = db.users.some(({ id }) => id === author)

    if (userExists) {
      const post = {
        id: datatype.uuid(),
        title,
        body,
        published,
        author
      }

      db.posts.push(post)
      
      post.published && (
        pubSub.publish(
          `post ${author}`,
          {
            post: {
              mutation: 'CREATED',
              data: post
            }
          }
        )
      )

      return post
    } else {
      throw new Error('User not found')
    }
  },
  createComment:(_, { comment }, { db, pubSub }) => {
    const { text, author, post } = comment
    const userExists = db.users.some(({ id }) => id === author)
    const postExists = db.posts.some(({ id }) => id === post)

    if(userExists && postExists) {
      const comment = {
        id: datatype.uuid(),
        text,
        author,
        post
      }

      db.comments.push(comment)
      pubSub.publish(`comment ${post}`, { comment })

      return comment
    }

  },
  deleteUser: (_, args, { db }) => {
    const userIndex = db.users.findIndex(({ id }) => id === args.id)

    if (userIndex >= 0) {
      const deletedUsers = db.users.splice(userIndex, 1)

      const postsToDelete =
        db.posts
          .map(({ author }, index) => author === args.id ? index : null)
          .filter(res => res !== null)
      
      postsToDelete.forEach(index => db.posts.splice(index, 1))

      return deletedUsers[0]
    } else {
      throw new Error('User not Found')
    }
  },
  deletePost: (_, args, { db, pubSub }) => {
    if (!args.id || !args.id.length) {
      throw new Error('No Post ID provided')
    }

    const postIndex = db.posts.findIndex(({ id }) => id === args.id)

    if (postIndex < 0) {
      throw new Error('Post not Found')
    }

    const deletedPost = db.posts.splice(postIndex, 1)[0]

    const commentsToDelete =
      db.comments
        .map(({ post }, index) => post === args.id ? index : null)
        .filter(res => res !== null)
    
    commentsToDelete.forEach(index => db.comments.splice(index, 1))
    deletedPost.published && (
      pubSub.publish(
        `post ${deletedPost.author}`,
        {
          post: {
            mutation: 'DELETED',
            data: deletedPost
          }
        }
      )
    )

    return deletedPost
  },
  deleteComment: (_, args, { db }) => {
    if (!args.id || !args.id.length) {
      throw new Error('No Comment ID provided')
    }

    const commentIndex = db.comments.findIndex(({ id }) => id === args.id)

    if (commentIndex < 0) {
      throw new Error('Post not Found')
    }

    const deletedComment = db.comments.splice(commentIndex, 1)[0]

    return deletedComment
  },
  updateUser: (_, args, { db }) => {
    const user = db.users.find(({ id }) => id === args.id)
    
    if (!user) {
      throw new Error('User not Found')
    }

    if (args.data.email) {
      const emailIsTaken = db.users.some(user => user.email === data.email)

      if (!emailIsTaken) {
        throw new Error('Email already taken')
      }
    }

    args.data.name && (user.name = args.data.name)
    args.data.role && (user.role = args.data.role)

    return user
  },
  updatePost: (_, args, { db }) => {
    const post = db.posts.find(({ id }) => id === args.id)
    
    if (!post) {
      throw new Error('post not Found')
    }

    args.data.title && (post.title = args.data.title)
    args.data.body && (post.body = args.data.body)
    args.data.published !== null && (post.published = args.data.published)

    
    args.data.published && (
      pubSub.publish(
        `post ${post.author}`,
        {
          post: {
            mutation: 'UPDATED',
            data: post
          }
        }
      )
    )

    return post
  }
  ,
  updateComment: (_, args, { db }) => {
    const comment = db.comments.find(({ id }) => id === args.id)
    
    if (!comment) {
      throw new Error('Comment not Found')
    }

    args.data.name && (comment.name = args.data.name)
    args.data.text && (comment.text = args.data.text)

    return comment
  }}

export default Mutation