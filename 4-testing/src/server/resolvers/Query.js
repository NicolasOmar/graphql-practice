const Query = {
  greeting: (parent, args) => `Hello ${args.role || 'User'} ${args.name}`,
  getAllUsers: (parent, args, { db }) => [...db.users],
  getPosts: (parent, { term }, { db }) => {
    return term
      ? db.posts.filter(post => post.title.includes(term) || post.body.includes(term))
      : db.posts
  },
  getAllComments: (parent, args, { db }) => [...db.comments]
}

export default Query