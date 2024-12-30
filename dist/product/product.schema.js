export const productTypeDefs = `#graphql
    type Product {
      id: ID!
      spanishTitle: String!
      englishTitle: String
      price: Float!
      spanishIngredients: String!
      englishIngredients: String
      spanishDescription: String!
      englishDescription: String
      image: String
      available: Boolean!
      categoryId: ID!
    }

    type Query {
      products: [Product]
      product(id: ID!): Product
    }

    type Mutation {
      addProduct(name: String!, price: Float!): Product
      updateProduct(id: ID!, name: String, price: Float): Product
      deleteProduct(id: ID!): Product
    }
`;
