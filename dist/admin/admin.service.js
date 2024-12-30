import prisma from "../prisma/client";
export const adminService = {
    login: async (username, password) => {
        const session = await prisma.admin.findFirst({ where: { username } });
    },
    changePassword: async (username, password, newPassword) => { },
};
