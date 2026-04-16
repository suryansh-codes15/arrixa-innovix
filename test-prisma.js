import 'dotenv/config'
import { prisma } from './src/lib/prisma.js'

async function test() {
  try {
    console.log('Testing connection...')
    const blogs = await prisma.blog.findMany()
    console.log('Blogs found:', blogs.length)
    const works = await prisma.work.findMany()
    console.log('Works found:', works.length)
    process.exit(0)
  } catch (e) {
    console.error('CONNECTION ERROR:', e)
    process.exit(1)
  }
}

test()
