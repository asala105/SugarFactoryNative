

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ChatScreen from './chatScreen';
import Messages from './messages';


const Stack = createNativeStackNavigator();

export default function MessageStack(){
    return (
        <Stack.Navigator initialRouteName ="Messages Screen">
            <Stack.Screen name = "Messages Screen" component = {Messages} options={{headerShown : false}} />
            <Stack.Screen name = "Chat Screen" component = {ChatScreen} options = {({route})=>({
                title : route.params.userName,
                headerBackTitleVisible :false
            }),
            {headerShown : false}} />
        </Stack.Navigator>
    );


    
}