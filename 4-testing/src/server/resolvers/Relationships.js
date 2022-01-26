const User = {
  posts: (parent, _, { db }) => db.posts.filter(({ author }) => author === parent.id),
  comments: (parent, _, { db }) => db.comments.filter(({ author }) => author === parent.id)
}

const Post = {
  author: (parent, _, { db }) => db.users.find(({ id }) => id === parent.author),
  comments: (parent, _, { db }) => db.comments.filter(({ post }) => post === parent.id)
}

const Comment = {
  author: (parent, _, { db }) => db.users.find(({ id }) => id === parent.author),
  post: (parent, _, { db }) => db.posts.find(({ id }) => id === parent.post)
}

export default {
  User,
  Post,
  Comment
}