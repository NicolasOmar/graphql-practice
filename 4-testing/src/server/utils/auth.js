import jwt from 'jsonwebtoken'

export const authUser = (request) => {
  try {
    const token = request.headers['auth']
      ? request.headers['auth'].replace('Bearer ', '')
      : null

    if (!token) throw new Error('Unauthenticated user')

    const verifiedToken = jwt.verify(token, 'mySecret')

    if (!verifiedToken) throw new Error('Unauthenticated user')

    return jwt.decode(token).email
  } catch {
    throw new Error('Unauthenticated user')
  }
}