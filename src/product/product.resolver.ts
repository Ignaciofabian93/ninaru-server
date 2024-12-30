import { Product } from "../types/product";
import { productService } from "./product.service";

export const productResolvers = {
  Query: {
    products: () => productService.products(),
    product: (_: any, { id }: { id: number }) => productService.product(id),
  },
  Mutation: {
    addProduct: (
      _: any,
      {
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
        category,
      }: Omit<Product, "id">
    ) =>
      productService.addProduct({
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
      }),
    updateProduct: (
      _: any,
      {
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
      }: Omit<Product, "category">
    ) =>
      productService.updateProduct({
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
      }),
    deleteProduct: (_: any, { id }: { id: number }) => productService.deleteProduct(id),
  },
};
