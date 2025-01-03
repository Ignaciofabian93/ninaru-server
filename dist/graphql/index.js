import { adminTypeDefs } from "../admin/admin.schema";
import { adminResolvers } from "../admin/admin.resolver";
import { productTypeDefs } from "../product/product.schema";
import { productResolvers } from "../product/product.resolver";
import { categoryTypeDefs } from "../category/category.schema";
import { categoryResolvers } from "../category/category.resolver";
export const typeDefs = [adminTypeDefs, productTypeDefs, categoryTypeDefs];
export const resolvers = [adminResolvers, productResolvers, categoryResolvers];
