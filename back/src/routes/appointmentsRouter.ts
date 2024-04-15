import { Router } from "express";
import { addNewAppointment, cancelAppointment, getAllAppointments, getAppointment } from "../controllers/appointmentsControllers";
import { validateId } from "../middlewares/validateId";

const appointmentsRouter: Router = Router()

appointmentsRouter.get('/', getAllAppointments) 
appointmentsRouter.get('/:id', getAppointment) 
appointmentsRouter.post('/schedule', addNewAppointment) 
appointmentsRouter.put('/cancel/:id', cancelAppointment) 

export default appointmentsRouter