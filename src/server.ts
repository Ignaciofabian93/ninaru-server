import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs, resolvers } from "./graphql";
import express from "express";
import cors from "cors";
import http from "http";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use("/graphql", cors<cors.CorsRequest>({ origin: "*" }), express.json(), expressMiddleware(server));

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log("Server ready");
