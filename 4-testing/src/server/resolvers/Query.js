const Query = {
  greeting: (_, args) => `Hello ${args.role || 'User'} ${args.name}`,
  getAllUsers: (_, __, { db }) => [...db.users],
  getPosts: (_, { term }, { db }) => {
    return term
      ? db.posts.filter(post => post.title.includes(term) || post.body.includes(term))
      : db.posts
  },
  getAllComments: (_, __, { db }) => [...db.comments]
}

export default Query