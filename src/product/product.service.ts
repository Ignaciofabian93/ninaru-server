import prisma from "../prisma/client";
import { Product } from "../types/product";

export const productService = {
  products: async () => {
    return await prisma.product.findMany();
  },
  product: async (id: number) => {
    return await prisma.product.findUnique({ where: { id } });
  },
  addProduct: async ({
    spanishTitle,
    spanishDescription,
    spanishIngredients,
    englishTitle,
    englishDescription,
    englishIngredients,
    price,
    image,
    available,
    categoryId,
  }: Omit<Product, "id" | "category">) => {
    return await prisma.product.create({
      data: {
        spanishTitle,
        spanishDescription,
        spanishIngredients,
        englishTitle,
        englishDescription,
        englishIngredients,
        price,
        image,
        available,
        categoryId,
      },
    });
  },
  updateProduct: async ({
    id,
    spanishTitle,
    spanishDescription,
    spanishIngredients,
    englishTitle,
    englishDescription,
    englishIngredients,
    price,
    image,
    available,
    categoryId,
  }: Omit<Product, "category">) => {
    return await prisma.product.update({
      where: { id },
      data: {
        spanishTitle,
        spanishDescription,
        spanishIngredients,
        englishTitle,
        englishDescription,
        englishIngredients,
        price,
        image,
        available,
        categoryId,
      },
    });
  },
  deleteProduct: async (id: number) => {
    return await prisma.product.delete({ where: { id } });
  },
};
