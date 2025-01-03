import { categoryService } from "./category.service";
export const categoryResolvers = {
    Query: {
        categories: () => categoryService.categories(),
        category: (_, { id }) => categoryService.category(id),
    },
    Mutation: {
        addCategory: (_, { spanishTitle, englishTitle, navLinkId }) => categoryService.addCategory({
            spanishTitle,
            englishTitle,
            navLinkId,
        }),
        updateCategory: (_, { id, spanishTitle, englishTitle, navLinkId }) => categoryService.updateCategory({
            id,
            spanishTitle,
            englishTitle,
            navLinkId,
        }),
        deleteCategory: (_, { id }) => categoryService.deleteCategory(id),
    },
};
