import axios from 'axios';
// import CookieService from './Service/CookieService';
import AsyncStorage from '@react-native-community/async-storage';


const BASE_URL = 'http://127.0.0.1:8000/api';

const JWTtoken = AsyncStorage.getItem('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + JWTtoken,
    },
}

export default{

    login: (data) =>
    axios.post(`${BASE_URL}/login`, data),

    register: (data) =>
    axios.post(`${BASE_URL}/register`, data)

}