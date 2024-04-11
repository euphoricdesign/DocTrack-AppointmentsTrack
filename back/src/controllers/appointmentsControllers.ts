import { Request, Response } from "express";
import { addNewAppointmentService, getAllAppointmentsService, getAppointmentService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";

let userId = 0

export const getAllAppointments = async (req: Request, res: Response) => {
    const appointments: Appointment[] = await getAllAppointmentsService()
    res.status(200).json(appointments)
}

export const getAppointment = async (req: Request, res: Response) => {

    const appointmentId: number = Number(req.params.id)
    const appointment: Appointment | null = await getAppointmentService(appointmentId)
    res.status(200).json(appointment)

}

export const addNewAppointment = async (req: Request, res: Response) => {
    userId++

    const { date, time } = req.body
    const newAppointment: Appointment = await addNewAppointmentService({ date, time,  userId})
    res.status(201).json(newAppointment)
}

// export const cancelAppointment = async (req: Request, res: Response) => {
    // const appointmentId: number = Number(req.params.id)
    // const canceledAppointment: Appointment | null = await cancelAppointmentService(appointmentId)
    // res.status(200).json(canceledAppointment)
// }