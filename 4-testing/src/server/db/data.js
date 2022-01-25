import { datatype } from 'faker'

const users = [
  {
    id: datatype.uuid(),
    name: 'User 1',
    email: 'user_1@mail.com',
    age: 28,
  }, {
    id: datatype.uuid(),
    name: 'User 2',
    email: 'user_2@mail.com',
    age: null,
  }, {
    id: datatype.uuid(),
    name: 'User 3',
    email: 'user_3@mail.com',
    age: null,
  }, {
    id: datatype.uuid(),
    name: 'User 7',
    email: 'user_7@mail.com',
    age: null,
  }
]

const posts = [
  {
    id: datatype.uuid(),
    title: 'Title of Post A',
    body: 'Body of Post A - A',
    published: true
  }, {
    id: datatype.uuid(),
    title: 'Title of Post B',
    body: 'Body of Post B - B',
    published: true
  }, {
    id: datatype.uuid(),
    title: 'Title of Post C',
    body: 'Body of Post C - C',
    published: false
  }, {
    id: datatype.uuid(),
    title: 'Title of Post D',
    body: 'Body of Post D - D',
    published: true
  }
].map((post, i) => ({ ...post, author: users[i].id }))

const comments = [
  {
    id: datatype.uuid(),
    text: 'Text 001-001-001'
  }, {
    id: datatype.uuid(),
    text: 'Text 002-002-002'
  }, {
    id: datatype.uuid(),
    text: 'Text 010-010-010'
  }, {
    id: datatype.uuid(),
    text: 'Text 021-021-021'
  }
].map((comment, i) => ({ ...comment, author: users[i].id, post: posts[i].id}))

const db = {
  users,
  posts,
  comments
}

export default db