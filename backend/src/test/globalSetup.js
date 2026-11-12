import { MongoMemoryServer } from 'mongodb-memory-server'

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
        // This needs to be changed per system
        // https://www.mongodb.com/try/download/community-edition/releases/archive
//        downloadUrl: 'https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel93-9.0.2.tgz'
        version: '9.0.2'
    },
  })

  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}
