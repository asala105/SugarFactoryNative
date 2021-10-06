import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';



const data = [
    {id:1, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:2, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:3, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:4, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:5, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:6, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
    {id:7, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
    {id:8, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
    {id:9, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
    

]



export default function Notifications() {
    return (
        // <View style = {styles.container} >
        //     <FlatList
        //     data = {data}
        //     keyExtractor ={(item,index) =>{return index.toString()}}
        //     renderItem = {({item})=>{
        //         return (
        //             <View style = {styles.container}>
        //                 <View style ={styles.HeaderLeftImageView}>
        //                     <Image style ={styles.HeaderLeftImage} source={require('../pictures/avataricon.png')} />

        //                 </View>
        //                 <View style ={{flexDirection: 'row',marginLeft :10}}>
        //                     <View>
        //                         <Text style ={{color: '#1B6ADF',fontSize:15}}>{item.username}</Text>
        //                         <Text style ={{color: '#64676B',fontSize:15}}>{item.time}</Text>
        //                     </View>
        //                     <View>
        //                         <Text style ={{color: '#64676B'}}>{item.notification}</Text>
        //                     </View>
        //                 </View>
        //             </View>
        //         );
        //     }} />
        // </View>
        <ScrollView style={styles.container}>
            <FlatList
                style={styles.notificationList}
                data={data}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.notificationBox}>
                            <Image style={styles.icon}
                               source={require('../pictures/avatar1.svg')} />

                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    )
                }} />
        </ScrollView>

    );
}

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         padding: 15,
//         backgroundColor: "#F9DEC9"

//     },
//     HeaderLeftImage: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 50
//     },
//     HeaderLeftImageView: {
//         width: 40,
//         height: 40,
//         borderRadius: 40 / 2,
//         marginLeft: 15,
//     }


// });
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