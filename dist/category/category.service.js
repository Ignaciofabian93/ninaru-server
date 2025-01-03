import prisma from "../prisma/client";
export const categoryService = {
    categories: async () => {
        return await prisma.category.findMany();
    },
    category: async (id) => {
        return await prisma.category.findUnique({ where: { id } });
    },
    addCategory: async ({ spanishTitle, englishTitle, navLinkId }) => {
        return await prisma.category.create({
            data: {
                spanishTitle,
                englishTitle,
                navLinkId,
            },
        });
    },
    updateCategory: async ({ id, spanishTitle, englishTitle, navLinkId }) => {
        return await prisma.category.update({
            where: { id },
            data: {
                spanishTitle,
                englishTitle,
                navLinkId,
            },
        });
    },
    deleteCategory: async (id) => {
        return await prisma.category.delete({ where: { id } });
    },
};
