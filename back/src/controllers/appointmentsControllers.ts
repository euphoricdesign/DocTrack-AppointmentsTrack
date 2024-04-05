import { Request, Response } from "express";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrán obtener todos los turnos"})
    } catch (error) {
        console.log("Error al obtener los usuarios", error)
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá obtener un turno especifico"})
    } catch (error) {
        console.log("Error al obtener usuario", error)
    }
}

export const addNewAppointment = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá agendar un nuevo turno"})
    } catch (error) {
        console.log("Error al registrar usuario", error)
    }
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        res.json({message: "Pronto se podrá cancelar un turno"})
    } catch (error) {
        console.log("Error al loguear usuario", error)
    }
}