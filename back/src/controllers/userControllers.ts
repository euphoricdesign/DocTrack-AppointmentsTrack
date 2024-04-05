import { Request, Response } from "express";
import IUser from "../interfaces/IUser";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrán obtener los usuarios"})
    } catch (error) {
        console.log("Error al obtener los usuarios", error)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrán obtener los datos de un usuario especifico"})
    } catch (error) {
        console.log("Error al obtener usuario", error)
    }
}

export const registerNewUser = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá registrar un usuario"})
    } catch (error) {
        console.log("Error al registrar usuario", error)
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá loguear un usuario"})
    } catch (error) {
        console.log("Error al loguear usuario", error)
    }
}