import { PrismaClient, User } from "prisma/prisma-client";

const prisma = new PrismaClient();
const createUser = async (data: User): Promise<User> => {
    const result = await prisma.user.create({ data })
    return result;
}
export const UserService = {
    createUser,
}