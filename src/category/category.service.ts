import prisma from "../prisma/client";
import { Category } from "../types/category";

export const categoryService = {
  categories: async () => {
    return await prisma.category.findMany();
  },
  category: async (id: number) => {
    return await prisma.category.findUnique({ where: { id } });
  },
  addCategory: async ({ spanishTitle, englishTitle, navLinkId }: Omit<Category, "id" | "products" | "navLink">) => {
    return await prisma.category.create({
      data: {
        spanishTitle,
        englishTitle,
        navLinkId,
      },
    });
  },
  updateCategory: async ({ id, spanishTitle, englishTitle, navLinkId }: Omit<Category, "products" | "navLink">) => {
    return await prisma.category.update({
      where: { id },
      data: {
        spanishTitle,
        englishTitle,
        navLinkId,
      },
    });
  },
  deleteCategory: async (id: number) => {
    return await prisma.category.delete({ where: { id } });
  },
};
