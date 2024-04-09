import CredentialsDto from "../dto/credentialsDto";
import ICredential from "../interfaces/ICredential";

const userCredentials: ICredential[] = [
    {
        id: 1,
        username: "sandra",
        password: "sandra123"
    }
]

let id = 1

export const createCredentialsService = async (credentials: CredentialsDto): Promise<number> => {
    id++
    const newCredential: ICredential = {
        id: id,
        username: credentials.username,
        password: credentials.password
    }
    userCredentials.push(newCredential)
    return newCredential.id
}

export const validateCredentials = async (credentials: CredentialsDto) => {
    const { username, password } = credentials
    const foundCredentials = userCredentials.find(credential => credential.username === username && credential.password === password)

    if (foundCredentials && foundCredentials.username === username && foundCredentials.password === password) {
        return foundCredentials.id
    } else {
        throw Error("Credenciales no válidas")
    }
}