import { adminService } from "./admin.service";
export const adminResolvers = {
    Query: {
        login: () => { },
    },
    Mutation: {
        changePassword: (_, { username, password, newPassword }) => adminService.changePassword(username, password, newPassword),
    },
};
