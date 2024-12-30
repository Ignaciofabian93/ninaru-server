export const categoryTypeDefs = `#graphql
    type Category {
        id: ID!
        spanishTitle: String!
        englishTitle: String
        products: [Product]
        navLinkId: ID!
    }

    type Query {
        categories: [Category]
        category(id: ID!): Category
    }

    type Mutation {
        addCategory(spanishTitle: String!, englishTitle: String, navLinkId: ID!): Category
        updateCategory(id: ID!, spanishTitle: String, englishTitle: String, navLinkId: ID): Category
        deleteCategory(id: ID!): Category
    }
`;
