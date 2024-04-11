import { AppDataSource } from "../config/data-source";
import CredentialsDto from "../dto/credentialsDto";
import { Credential } from "../entities/Credential";


const CredentialModel = AppDataSource.getRepository(Credential)

export const createCredentialsService = async (credentials: CredentialsDto): Promise<Credential> => {
    try {
        const newCredential = new Credential()
        newCredential.username = credentials.username
        newCredential.password = credentials.password
    
        CredentialModel.save(newCredential)
        
        return newCredential
    } catch (error) {
        console.error('Hubo un problema con la operación:', error);
        throw error;
    }
}

export const validateCredentials = async (credentials: CredentialsDto) => {
    // const { username, password } = credentials
    // const foundCredentials = userCredentials.find(credential => credential.username === username && credential.password === password)

    // if (foundCredentials && foundCredentials.username === username && foundCredentials.password === password) {
    //     return foundCredentials.id
    // } else {
    //     throw Error("Credenciales no válidas")
    // }
}

