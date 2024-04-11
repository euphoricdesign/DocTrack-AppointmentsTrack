import UserDto from "../dto/userDto"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { createCredentialsService } from "./credentialService"
import { AppDataSource } from "../config/data-source"

const UserModel = AppDataSource.getRepository(User)

export const getAllUsersService = async (): Promise<User[]> => {
    try {
        const allUsers = await UserModel.find({
            relations: {
                appointments: true
            }
        })
        return allUsers
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const getUserService = async (userId: number): Promise<User | null> => {
    try {
        const user = await UserModel.findOneBy({id: userId})
        return user
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const registerNewUserService = async (userData: UserDto): Promise<User> => {
    try {
        const newCredentials: Credential = await createCredentialsService({ username: userData.username, password: userData.password })

        const newUser = {
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni
        }
        
        const createdUser: User = await UserModel.create(newUser)
    
        createdUser.credential = newCredentials
        await UserModel.save(createdUser)
        return createdUser
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const loginUserService = async () => {
    
}