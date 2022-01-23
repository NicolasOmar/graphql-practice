import jwt from 'jsonwebtoken'

export const authUser = (request) => {
  const token = request.headers['auth']
    ? request.headers['auth'].replace('Bearer ', '')
    : null

  return token ? !!(jwt.verify(token, process.env.JWT_SECRET)) : false
}