const Post = {
  author: (parent, args, { db }) => db.users.find(({ id }) => id === parent.author),
  comments: (parent, args, { db }) => db.comments.filter(({ post }) => post === parent.id)
}

export default Post