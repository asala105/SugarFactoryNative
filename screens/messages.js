import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const MessagesJson =[
    {
        id : '1',
        userName : 'Nabih Tannous',
        userImg : require('../pictures/avatar2.svg'),
        messageTime : '4 mins ago',
        messageText : 'Hey there, this is my test for a post my social app in React Native '
    },
    {
        id : '2',
        userName : 'Nabiha family',
        userImg : require('../pictures/avatar2.svg'),
        messageTime : '4 mins ago',
        messageText : 'Hey there, this is my test for a post my social app in React Native '
    },
   

]


export default function Messages({navigation}) {
    return (
        <ScrollView style={{ backgroundColor: '#FBE8DA' }}>
            <View style={styles.container}>
                <FlatList 
                    data ={MessagesJson}    
                    keyExtractor={item=>item.id}
                    renderItem ={({item})=>(
                        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Chat Screen',{userName:item.userName})} >
                            <View style={styles.userinfo}>
                                <View style={styles.userimagewrapper}>
                                    <Image source={item.userImg} style={styles.userimage} />
                                </View>
                                <View style ={styles.textsection}>
                                    <View style={styles.userinfotext}>
                                        <Text style={styles.username}> {item.userName} </Text>
                                        <Text style ={styles.posttime}>{item.messageTime}</Text>
                                    </View>
                                <Text style={styles.messageText}>{item.messageText}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { //view
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#FBE8DA'
    },
    container2 :{
        flex : 1,
        alignItems :'center',
        justifyContent : 'center'
    },
    card: { // touchable opacity

        width: '100%',

    },
    userinfo :{ //view
        flexDirection : 'row',
        justifyContent : 'space-between',

    },
    userimagewrapper : { //view
        paddingTop : 15,
        paddingBottom : 15
    },
    userimage :{ //img
        width :50,
        height : 50,
        borderRadius : 25
    },
    textsection :{ //view
        flexDirection : 'column',
        justifyContent : 'center',
        padding : 15,
        paddingLeft : 0,
        marginLeft : 10,
        width : 300,
        borderBottomWidth : 1 ,
        borderBottomColor : '#cccccc'
    },
    userinfotext : { //view
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 5
    },
    username : { //text
        fontSize : 14,
        fontWeight : 'bold',

    },
    posttime : { //text
        fontSize : 12,
        color : '#666',

    },
    messagetext : {
        fontSize : 14,
        color : '#333333'
    }









});