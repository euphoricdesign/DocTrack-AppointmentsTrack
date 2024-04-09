import UserDto from "../dto/userDto"
import IUser from "../interfaces/IUser"
import { createCredentialsService } from "./credentialService"

const users: IUser[] = [
    {
        id: 1,
        name: "Merlina Villecco",
        birthdate: "01/04/1998",
        email: "mervillecco@mail.com",
        nDni: 41182238,
        credentialsId: 1
    }
]

let id = 1

export const getAllUsersService = async (): Promise<IUser[]> => {
    try {
        const allUsers = users //* simula llamada a la db 
        return allUsers
    } catch (error) {
        throw Error("Error de la base de datos al buscar usuarios")
    }
}

export const getUserService = async (userId: number): Promise<IUser | undefined> => {
    try {
        const user = users.find(user => user.id === userId)
        return user
    } catch (error) {
        throw error;
    }
}

export const registerNewUserService = async (userData: UserDto) => {
    id++

    const newCredentials = await createCredentialsService({username: userData.username, password: userData.password})

    const newUser: IUser = {
        id: id,
        name: userData.name,
        birthdate: userData.birthdate,
        email: userData.email,
        nDni: userData.nDni,
        credentialsId: newCredentials
    }
    console.log(newUser)

    users.push(newUser)
    return newUser
}

export const loginUserService = async () => {
    
}