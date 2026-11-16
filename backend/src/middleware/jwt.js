import { expressjwt } from 'express-jwt'

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET environment variable is not defined');
// }

export const requireAuth = expressjwt({
  secret: () => process.env.JWT_SECRET,
  algorithms: ['HS256'],
})

export const optionalAuth = expressjwt({
  secret: () => process.env.JWT_SECRET,
  algorithms: ['HS256'],
  credentialsRequired: false,
})
