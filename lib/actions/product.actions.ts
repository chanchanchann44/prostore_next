"use server";
import { prisma } from "../../db/prisma";
import { prismaToJson } from "../utils";

// Get latest products
export async function getLatestProducts() {
  //   const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return prismaToJson(data);
}

// Get product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
}
