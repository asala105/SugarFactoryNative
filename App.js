import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Register from './screens/register';
import MainTabScreen from './screens/mainTabScreen';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#8C0C33'},headerTintColor:'#F9DEC9'}}>

        <><Stack.Screen name = "Login" component = {Login} options={{headerShown : false}} />
        <Stack.Screen name = "Register" component = {Register} />
        </>
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#8C0C33'},headerTintColor:'#F9DEC9'}}>
       
        <Stack.Screen name = "MainTabScreen" component = {MainTabScreen} options={{headerShown : true}} />
        {/* <Stack.Screen name = "Auth" component = {Auth} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
// export default function App() {
//   let auth = null;
//   AsyncStorage.getItem("access_token").then((value) => {
//     auth = value;
//     console.log(auth);
//   })
//   return (
//     <NavigationContainer>
//         {auth != null?  <Auth/>:<Nav name="home"/>}
//     </NavigationContainer>
//   );
// }