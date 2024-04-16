import axios from 'axios'

export const validateCredential = async (credentials) => {
    const response = await axios.post('http://localhost:3000/users/login', credentials)
    if (response.statusText === 'OK') return true
    else return false
}