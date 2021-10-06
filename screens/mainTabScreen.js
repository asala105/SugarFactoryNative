import {useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import NotificationsScreen from './notifications';
import MessagesScreen from './messages';
import EditProfile from './editProfile';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Switching from './switching';

const Tab = createMaterialBottomTabNavigator();


export default function MainTabScreen() {
let navigation = useNavigation();
    let auth = ''
  AsyncStorage.getItem("access_token").then((value) => {
    auth = value;
    if (auth==null) {
      navigation.replace('Auth');
    }
  })

  return (
    // <Tab.Navigator initialRouteName="Home">
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Settings" component={SettingsScreen} />
    
      
    // </Tab.Navigator>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F9DEC9"
      barStyle={{ backgroundColor: '#8C0C33' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={'#F9DEC9'} size={23} />
          ),
          title : 'Home',
          
        }}
        
        
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={'#F9DEC9'} size={23} />
          ),
          title : 'Home',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment" color={'#F9DEC9'} size={23} />
          ),
          title : 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Switching}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={'#F9DEC9'} size={23} />
          ),
          title : 'Home',
        }}
      />
    </Tab.Navigator>
  );
}

