import { adminTypeDefs } from "../admin/admin.schema";
import { adminResolvers } from "../admin/admin.resolver";
import { productTypeDefs } from "../product/product.schema";
import { productResolvers } from "../product/product.resolver";
export const typeDefs = [adminTypeDefs, productTypeDefs];
export const resolvers = [adminResolvers, productResolvers];
