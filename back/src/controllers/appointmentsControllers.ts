import { Request, Response } from "express";
import { addNewAppointmentService, cancelAppointmentService, getAllAppointmentsService, getAppointmentService } from "../services/appointmentService";
import IAppointment from "../interfaces/IAppointment";

let userId = 1

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: IAppointment[] = await getAllAppointmentsService()
        res.status(200).json(appointments)
    } catch (error) {
        console.log("Error al obtener los usuarios", error)
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        const appointment = await getAppointmentService(Number(appointmentId))
        console.log(appointment)
        res.status(200).json(appointment)
    } catch (error) {
        console.log("Error al obtener usuario", error)
    }
}

export const addNewAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time } = req.body
        const newAppointment = await addNewAppointmentService({ date, time }, (userId + 1))
        res.status(201).json(newAppointment)
    } catch (error) {
        console.log("Error al registrar usuario", error)
    }
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id
        console.log(appointmentId)
        const canceledAppointment = await cancelAppointmentService(Number(appointmentId))
        console.log(canceledAppointment)
        res.status(200).json(canceledAppointment)
    } catch (error) {
        console.log("Error al loguear usuario", error)
    }
}