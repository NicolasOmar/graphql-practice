import jwt from 'jsonwebtoken'
import { ApolloError } from 'apollo-server'

export const authUser = (request) => {
  const token = request.headers['auth']
    ? request.headers['auth'].replace('Bearer ', '')
    : null
  
  if (!token || !(jwt.verify(token, process.env.JWT_SECRET))) throw new ApolloError('Unauthenticated user')

  return true
}