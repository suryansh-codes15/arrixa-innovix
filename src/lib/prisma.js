import { PrismaClient } from '@prisma/client'
import pkg from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const { Pool } = pkg

const globalForPrisma = globalThis

let prisma;

if (!globalForPrisma.prisma) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  prisma = new PrismaClient({ adapter })
} else {
  prisma = globalForPrisma.prisma
}

export { prisma }
