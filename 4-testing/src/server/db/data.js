import { datatype, name, internet, lorem } from 'faker'

const db = quantity => {
  const users = Array(quantity).fill(null).map(() => ({
    id: datatype.uuid(),
    name: `${name.firstName()} ${name.lastName()}`,
    email: internet.email(),
    age: datatype.number({ min: 1, max: 99 })
  }))

  const posts = Array(quantity).fill(null).map((_, i) => ({
    id: datatype.uuid(),
    title: lorem.words(2),
    body: lorem.sentence(4),
    published: datatype.boolean(),
    author: users[i].id
  }))

  const comments = Array(quantity).fill(null).map((_, i) => ({
    id: datatype.uuid(),
    text: lorem.paragraphs(1, ','),
    author: users[i].id,
    post: posts[i].id
  }))
  
  return {
    users,
    posts,
    comments
  }
}

export default db