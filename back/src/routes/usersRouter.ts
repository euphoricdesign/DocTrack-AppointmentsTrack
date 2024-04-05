import { Router } from "express";
import { getAllUsers, getUser, registerNewUser, userLogin } from "../controllers/userControllers";

const usersRouter: Router = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/register', registerNewUser) 
usersRouter.post('/login', userLogin) 

export default usersRouter