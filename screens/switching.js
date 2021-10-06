
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Settings from './settings';
import EditProfile from './editProfile';
import Favorites from './favorites';






const Stack = createNativeStackNavigator();


export default function Switching(){
    return (
        <Stack.Navigator initialRouteName ="Settings">
            <Stack.Screen name = "Settings" component = {Settings} options={{headerShown : false}} />
            <Stack.Screen name = "Edit Profile" component = {EditProfile} options={{headerShown : false}} />
            <Stack.Screen name = "Favorites" component = {Favorites} options={{headerShown : false}} />
        </Stack.Navigator>
    );


    
}