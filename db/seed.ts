import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './prisma/client'
import sampleData from "./sample-data";
// import ws from "ws";

async function main() {
  const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })
  await prisma.product.deleteMany();
  // await prisma.account.deleteMany();
  // await prisma.session.deleteMany();
  // await prisma.verificationToken.deleteMany();
  // await prisma.user.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });
  // await prisma.user.createMany({
  //   data: sampleData.users,
  // });

  console.log("Database has been seeded successfully.");
  // await prisma.$disconnect();
}

main();
