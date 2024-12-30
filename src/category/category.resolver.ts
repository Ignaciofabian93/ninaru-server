import { Category } from "../types/category";
import { categoryService } from "./category.service";

export const categoryResolvers = {
  Query: {
    categories: () => categoryService.categories(),
    category: (_: any, { id }: { id: number }) => categoryService.category(id),
  },
  Mutation: {
    addCategory: (_: any, { spanishTitle, englishTitle, navLinkId }: Omit<Category, "id">) =>
      categoryService.addCategory({
        spanishTitle,
        englishTitle,
        navLinkId,
      }),
    updateCategory: (_: any, { id, spanishTitle, englishTitle, navLinkId }: Omit<Category, "products">) =>
      categoryService.updateCategory({
        id,
        spanishTitle,
        englishTitle,
        navLinkId,
      }),
    deleteCategory: (_: any, { id }: { id: number }) => categoryService.deleteCategory(id),
  },
};
