import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { getAllUsersService, getUserService, registerNewUserService } from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getAllUsersService()
        res.status(200).json(users)
    } catch (error) {
        console.log("Error al obtener los usuarios", error)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const userId: string = req.params.id
        const user = await getUserService(Number(userId))
        if (!user) {
            res.status(404).send("No se encontró ningún usuario con ese ID en la base de datos");
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error al obtener usuario", error)
        res.status(500).send("Error al buscar usuario");
    }
}

export const registerNewUser = async (req: Request, res: Response) => {
    try {
        const {name, email, birthdate, nDni, username, password} = req.body;
        const user: IUser = await registerNewUserService({name, email, birthdate, nDni, username, password})
        res.status(200).json(user);
        
    } catch (error) {
        console.log("Error al registrar usuario", error)
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá loguear un usuario"})
    } catch (error) {
        console.log("Error al loguear usuario", error)
    }
}