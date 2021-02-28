const Subscription = {
  post: {
    subscribe(parent, { userId }, { db, pubSub }) {
      const user = db.users.find(({ id }) => id === userId)

      if (!user) {
        throw new Error('User not found')
      }

      return pubSub.asyncIterator(`post ${userId}`)
    }
  },
  comment: {
    subscribe(parent, { postId }, { db, pubSub }) {
      const post = db.posts.find(({ id, published }) => id === postId && published)

      if (!post) {
        throw new Error('Post not found')
      }

      return pubSub.asyncIterator(`comment ${postId}`)
    }
  }
}

export default Subscription