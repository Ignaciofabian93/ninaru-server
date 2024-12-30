import prisma from "../prisma/client";
export const productService = {
    products: async () => {
        return await prisma.product.findMany();
    },
    product: async (id) => {
        return await prisma.product.findUnique({ where: { id } });
    },
    addProduct: async ({ spanishTitle, spanishDescription, spanishIngredients, englishTitle, englishDescription, englishIngredients, price, image, available, categoryId, }) => {
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
    updateProduct: async ({ id, spanishTitle, spanishDescription, spanishIngredients, englishTitle, englishDescription, englishIngredients, price, image, available, categoryId, }) => {
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
    deleteProduct: async (id) => {
        return await prisma.product.delete({ where: { id } });
    },
};
