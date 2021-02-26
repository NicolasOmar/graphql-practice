export const users = [
  {
    id: '1',
    name: 'User 1',
    email: 'user_1@mail.com',
    age: 28,
  }, {
    id: '2',
    name: 'User 2',
    email: 'user_2@mail.com',
    age: null,
  }, {
    id: '3',
    name: 'User 3',
    email: 'user_3@mail.com',
    age: null,
  }, {
    id: '7',
    name: 'User 7',
    email: 'user_7@mail.com',
    age: null,
  }
]

export const posts = [
  {
    id: 'A',
    title: 'Title of Post A',
    body: 'Body of Post A - A',
    published: true,
    author: '1'
  }, {
    id: 'B',
    title: 'Title of Post B',
    body: 'Body of Post B - B',
    published: true,
    author: '1'
  }, {
    id: 'C',
    title: 'Title of Post C',
    body: 'Body of Post C - C',
    published: false,
    author: '1'
  }, {
    id: 'D',
    title: 'Title of Post D',
    body: 'Body of Post D - D',
    published: true,
    author: '7'
  }
]

export const comments = [
  {
    id: '001',
    text: 'Text 001-001-001',
    author: '1',
    post: 'A'
  }, {
    id: '002',
    text: 'Text 002-002-002',
    author: '2',
    post: 'B'
  }, {
    id: '010',
    text: 'Text 010-010-010',
    author: '3',
    post: 'C'
  }, {
    id: '021',
    text: 'Text 021-021-021',
    author: '7',
    post: 'D'
  }, {
    id: '034',
    text: 'Text 034-034-034',
    author: '3',
    post: 'D'
  }
]