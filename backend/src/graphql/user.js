import { listPostsByAuthor } from '../services/posts.js'

export const userSchema = `#graphql
  type User {
    username: String!
    posts: [Post!]!
  }
` // Required Backtick

export const userResolver = {
  User: {
    posts: async (user) => {
      return await listPostsByAuthor(user.username)
    },
  },
}
