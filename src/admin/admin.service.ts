import prisma from "../prisma/client";

export const adminService = {
  login: async (username: string, password: string) => {
    const session = await prisma.admin.findFirst({ where: { username } });
  },
  changePassword: async (username: string, password: string, newPassword: string) => {},
};
