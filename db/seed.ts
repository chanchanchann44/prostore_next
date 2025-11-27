import { PrismaClient } from "@/db/prisma/client";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";
import { PrismaPg } from "@prisma/adapter-pg";
// import ws from "ws";

async function main() {
  const connectionString = `${process.env.DATABASE_URL}`;
  const adapter = new PrismaPg({ connectionString: connectionString });
  const prisma = new PrismaClient({ adapter });
  // const prisma = new PrismaClient();
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
