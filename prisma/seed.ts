import { PrismaClient } from "@prisma/client";
import { categories, products } from "../src/lib/catalog";

const prisma = new PrismaClient();

function slug(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function main() {
  for (const categoryName of categories) {
    await prisma.category.upsert({
      where: { name: categoryName },
      update: {},
      create: { name: categoryName, slug: slug(categoryName) }
    });
  }

  for (const item of products) {
    const category = await prisma.category.findUniqueOrThrow({ where: { name: item.category } });
    await prisma.product.upsert({
      where: { sku: item.sku },
      update: {
        salePrice: item.salePrice,
        purchasePrice: item.purchasePrice,
        stock: item.stock,
        available: item.available,
        active: item.active
      },
      create: {
        sku: item.sku,
        name: item.name,
        description: item.description,
        image: item.image,
        format: item.format,
        salePrice: item.salePrice,
        purchasePrice: item.purchasePrice,
        stock: item.stock,
        alertThreshold: item.alertThreshold,
        criticalThreshold: item.criticalThreshold,
        available: item.available,
        active: item.active,
        costEstimated: item.costEstimated,
        categoryId: category.id
      }
    });
  }
}

main().finally(async () => prisma.$disconnect());
