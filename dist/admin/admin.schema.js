export const adminTypeDefs = `#graphql
    type Admin {
      id: ID!
      username: String!
      password: String!
    }

    type Query {
      login: [username: String!, password: String!]: Admin
    }

    type Mutation {
      changePassword:(password: String, newPassword: String): Admin
    }
`;
