import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { cond } from 'react-native-reanimated';

const BASE_URL = 'http://127.0.0.1:8000/api';

const cookie = AsyncStorage.getItem("access_token");

async function getHeader() {
    var JWTtoken = await AsyncStorage.getItem("access_token");
    const token = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JWTtoken
        },
    };
    return token;
}

export default{

    login: (data) =>
    axios.post(`${BASE_URL}/login`, data),

    register: (data) =>
    axios.post(`${BASE_URL}/register`, data),

    update: async (data) =>{
    let header = await getHeader();
        let res = await axios.post(`${BASE_URL}/update_profile`, data, header);
        return res;
    },

    getNotifications: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_notifications`, header);
        return res;
    },

    getUserData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/user_profile`, header);
        return res;
    },

    getAllUsers: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/feed`, header);
        return res;
    },

    tapUser: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/tap/${id}`, header);
        return res;
    },

    blockUser: async (id) =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/block/${id}`, header);
        return res;
    }
}