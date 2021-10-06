import axios from 'axios';
// import CookieService from './Service/CookieService';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import { cond } from 'react-native-reanimated';

const BASE_URL = 'http://127.0.0.1:8000/api';

const cookie = AsyncStorage.getItem("access_token");

// const token = {
//     headers: {
//         'Accept': 'application/json',
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer ' + cookie
//     },
// }

async function getHeader() {
    var JWTtoken = await AsyncStorage.getItem("access_token");
    console.log(JWTtoken);
    const token = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JWTtoken
        },
    };
    return token;
}

let header = getHeader();

export default{

    login: (data) =>
    axios.post(`${BASE_URL}/login`, data),

    register: (data) =>
    axios.post(`${BASE_URL}/register`, data),

    getNotifications: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/get_notifications`, header);
        return res;
    },

    getUserData: async () =>{
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/user_profile`, header);
        return res;
    }
    // getNotifications: async () =>{
    //     let header = await getHeader();
    //     console.log(header);
    //     fetch(`${BASE_URL}/get_notifications`, {
    //     method: 'GET',
    //     header}
    //     )}
}