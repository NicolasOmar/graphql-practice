const Comment = {
  author: (parent, args, { db }) => db.users.find(({ id }) => id === parent.author),
  post: (parent, args, { db }) => db.posts.find(({ id }) => id === parent.post)
}

export default Comment