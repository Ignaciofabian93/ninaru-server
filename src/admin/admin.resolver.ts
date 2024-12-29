import { adminService } from "./admin.service";

export const adminResolvers = {
  Query: {
    login: () => {},
  },
  Mutation: {
    changePassword: (
      _: any,
      { username, password, newPassword }: { username: string; password: string; newPassword: string }
    ) => adminService.changePassword(username, password, newPassword),
  },
};
