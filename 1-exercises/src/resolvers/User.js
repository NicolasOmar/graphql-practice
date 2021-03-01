const User = {
  posts: (parent, args, { db }) => db.posts.filter(({ author }) => author === parent.id),
  comments: (parent, args, { db }) => db.comments.filter(({ author }) => author === parent.id)
}

export default User