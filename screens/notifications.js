import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../api';

export default function Notifications() {

  const [notifications, setNotifications] = useState('');
  const allNotifications = ()=>{
    api.getNotifications()
        .then(response => {
            setNotifications(response.data);
        })
        .catch(error => {
            console.log('Error');
        });
}
useEffect(() => {
  allNotifications();
}, []);

    return (
        <ScrollView style={styles.container}>
            <FlatList
                style={styles.notificationList}
                data={notifications}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.notificationBox}>
                            <Image style={styles.icon}
                               source={require('../pictures/avatar1.svg')} />

                            <Text style={styles.description}>{item.body}</Text>
                        </View>
                    )
                }} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FBE8DA'
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#8C0C33',
      flexDirection: 'row',
      borderRadius:10,
      opacity : 0.9
    },
    icon:{
      width:45,
      height:45,
    },
    description:{
      fontSize:13,
      color: "#F9DEC9",
      marginLeft:10,
    },
  });