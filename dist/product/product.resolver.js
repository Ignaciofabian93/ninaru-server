import { productService } from "./product.service";
export const productResolvers = {
    Query: {
        products: () => productService.products(),
        product: (_, { id }) => productService.product(id),
    },
    Mutation: {
        addProduct: (_, { spanishTitle, spanishDescription, spanishIngredients, englishTitle, englishDescription, englishIngredients, price, image, available, categoryId, category, }) => productService.addProduct({
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
        updateProduct: (_, { id, spanishTitle, spanishDescription, spanishIngredients, englishTitle, englishDescription, englishIngredients, price, image, available, categoryId, }) => productService.updateProduct({
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
        deleteProduct: (_, { id }) => productService.deleteProduct(id),
    },
};
