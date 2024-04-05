import { Router } from "express";
import { addNewAppointment, cancelAppointment, getAllAppointments, getAppointment } from "../controllers/appointmentsControllers";

const appointmentsRouter: Router = Router()

appointmentsRouter.get('/', getAllAppointments) 
appointmentsRouter.get('/:id', getAppointment) 
appointmentsRouter.post('/schedule', addNewAppointment) 
appointmentsRouter.put('/cancel', cancelAppointment) 

export default appointmentsRouter