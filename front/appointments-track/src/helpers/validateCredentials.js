import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

export const validateCredential = async (credentials) => {
    const dispatch = useDispatch()
    const response = await axios.post('http://localhost:3000/users/login', credentials)
    if (response.statusText === 'OK') {
        const user = response.data.user
        console.log(user);
        dispatch(setUser(newUserData))
        return true
    }
    else return false
}