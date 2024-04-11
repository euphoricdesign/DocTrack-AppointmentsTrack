import AppointmentDto from "../dto/appointmentDto";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

const AppointmentModel = AppDataSource.getRepository(Appointment)
const UserModel = AppDataSource.getRepository(User)

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    try {
        const allAppointments = AppointmentModel.find({
            relations: {
                user: true
            }
        })
        return allAppointments
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const getAppointmentService = async (appointmentId: number): Promise<Appointment | null> => {
    try {
        const appointment: Appointment | null = await AppointmentModel.findOne({
            where: { id: appointmentId },
            relations: ['user']
        })
        return appointment
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const addNewAppointmentService = async (newAppointment: AppointmentDto): Promise<Appointment> => {
    try {
        const createdAppointment = await AppointmentModel.create(newAppointment)
        await AppointmentModel.save(createdAppointment)

        const user: User | null = await UserModel.findOneBy({ id: newAppointment.userId })
        if (user) createdAppointment.user = user
    
        await AppointmentModel.save(createdAppointment)
        return createdAppointment
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

// export const cancelAppointmentService = async (appointmentId: number) => {
//     const canceledAppointment = AppointmentModel.findOneBy({id: appointmentId})
//     console.log(canceledAppointment)

//     const appointmentIndex: number = appointments.findIndex(appointment => appointment.id === appointmentId)
//     appointments[appointmentIndex].status = AppointmentStatus.Cancelled
    
//     return appointments[appointmentIndex]
// }