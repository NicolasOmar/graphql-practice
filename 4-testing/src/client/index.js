import ApolloBoost, { gql } from 'apollo-boost'

const client = new ApolloBoost({
  uri: 'http://localhost:4000'
})
const getUsers = gql`
  query {
    users: getAllUsers {
      email
    }
  }
`
let htmlResult = ''

client.query({
  query: getUsers
}).then(
  ({ data: { users } }) => users.forEach(({ email }) => htmlResult += `<div>${email}</div>`)
).catch(
  () => htmlResult = 'No data'
).finally(
  () => document.getElementById('posts').innerHTML = htmlResult
)