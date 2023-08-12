import { RequestHandler } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await UserService.createUser(data);

        res.send({
            success: true,
            statusCode: 200,
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        res.send({ error: error })
    }
}

export const UserController = {
    createUser,

}