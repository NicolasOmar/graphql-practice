import { v4 as uuidv4 } from 'uuid'

const Mutation = {
  createUser: (parent, args, { db }) => {
    const emailTaken = db.users.some(({ email }) => email === args.email)

    if (emailTaken) {
      throw new Error('The Email has been taken')
    } else {
      const newUser = {
        id: uuidv4(),
        name: args.name,
        email: args.email,
        age: args.age
      }

      db.users.push(newUser)
      return newUser
    }
  },
  createPost:(
    parent,
    { title, body, published, author },
    { db }
  ) => {
    const userExists = db.users.some(({ id }) => id === author)

    if (userExists) {
      const newPost = {
        id: uuidv4(),
        title,
        body,
        published,
        author
      }

      db.posts.push(newPost)

      return newPost
    } else {
      throw new Error('User not found')
    }
  },
  createComment:(
    parent,
    { text, author, post },
    { db }
  ) => {
    const userExists = db.users.some(({ id }) => id === author)
    const postExists = db.posts.some(({ id }) => id === post)

    if(userExists && postExists) {
      const newComment = {
        id: uuidv4(),
        text,
        author,
        post
      }
      db.comments.push(newComment)

      return newComment
    }

  },
  deleteUser: (parent, args, { db }) => {
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
  deletePost: (parent, args, { db }) => {
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

    return deletedPost
  },
  deleteComment: (parent, args, { db }) => {
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
  updateUser: (parent, args, { db }) => {
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
  updatePost: (parent, args, { db }) => {
    const post = db.posts.find(({ id }) => id === args.id)
    
    if (!post) {
      throw new Error('post not Found')
    }

    args.data.title && (post.title = args.data.title)
    args.data.body && (post.body = args.data.body)
    args.data.published !== null && (post.published = args.data.published)

    return post
  }
  ,
  updateComment: (parent, args, { db }) => {
    const comment = db.comments.find(({ id }) => id === args.id)
    
    if (!comment) {
      throw new Error('Comment not Found')
    }

    args.data.name && (comment.name = args.data.name)
    args.data.text && (comment.text = args.data.text)

    return comment
  }}

export default Mutation