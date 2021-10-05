import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Register from './screens/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#8C0C33'},headerTintColor:'#F9DEC9'}}>
       
        {/* <Stack.Screen name = "MainTabScreen" component = {MainTabScreen} /> */}

        {/* <Stack.Screen name = "MainTabScreen" component = {User} /> */}

        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Register" component = {Register} />
        

      </Stack.Navigator>

    </NavigationContainer>
  );
}
