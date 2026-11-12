import dotenv from 'dotenv'

import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

dotenv.config()

await initDatabase()

const post = new Post({
    title: 'Hello second post!',
    author: 'John Doe',
    contents: 'This is my new exciting content.',
    tags: ['frontend'],
})
await post.save()

const posts = await Post.find()
console.log(posts)
