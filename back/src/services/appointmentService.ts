import IAppointment, { AppointmentStatus } from "../interfaces/IAppointment";
import AppointmentDto from "../dto/appointmentDto";

const appointments: IAppointment[] = [
    {
        id: 1,
        date: "01/05/2000", //* PASAR ESTO A: New Date("24/04/2024")
        time: "10:30",
        userId: 1,
        status: AppointmentStatus.Active
    }
]

let id = 1

export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
    try {
        const allAppointments: IAppointment[] = appointments
        return allAppointments
    } catch (error) {
        throw error
    }
}

export const getAppointmentService = async (appointmentId: number): Promise<IAppointment | undefined> => {
    try {
        const appointment: IAppointment | undefined = appointments.find(appointment => appointment.id === appointmentId)
        return appointment
    } catch (error) {
        throw error;
    }
}

export const addNewAppointmentService = async (newAppointment: AppointmentDto, userId: number): Promise<IAppointment> => {
    id++
    if (!userId) {
        throw Error("Se debe proporcionar un ID de usuario para crear un turno.")
    }

    const appointmentWUserId: IAppointment = {
        id: id,
        ...newAppointment,
        userId: userId,
        status: AppointmentStatus.Active
    }

    appointments.push(appointmentWUserId)
    return appointmentWUserId

}

export const cancelAppointmentService = async (appointmentId: number): Promise<IAppointment> => {
    const appointmentIndex: number = appointments.findIndex(appointment => appointment.id === appointmentId)
    appointments[appointmentIndex].status = AppointmentStatus.Cancelled
    
    return appointments[appointmentIndex]
}