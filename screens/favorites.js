import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../api';
import { FlatList } from 'react-native-gesture-handler';

export default function Favorites() {


    const [feed, setFeed] = useState({});
    const allFavs = ()=>{
      api.getAllFavs()
          .then(response => {
              setFeed(response.data);
          })
          .catch(error => {
              console.log('Error');
          });
  }
  useEffect(() => {
    allFavs();
  }, []);

    return (
        <ScrollView style={{ backgroundColor: '#FBE8DA' }}>
            <View style={styles.container}>
            <FlatList
            style={{ width: 320 }}
                data={feed}
                keyExtractor={(item,index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                <View style={styles.card}>
                    <View style={styles.userinfo}>       
                        <Image style={styles.userimage} source={require('../pictures/avatar2.svg')} />
                        <View>
                            <Text style={styles.username}>{item.user.first_name + ' ' + item.user.last_name}</Text>
                            <Text style ={styles.bio} > Net Worth: {item.user.currency===null ? "": item.user.currency} {item.user.net_worth===null ? "": item.user.net_worth}</Text>
                        </View>
                    </View>
                    <Text style ={styles.posttext}> Bio: {item.user.bio} </Text>
                    <View style={styles.divider} />
                </View>
                    )}} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FBE8DA',
        padding: 20
    },
    card: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,

    },
    userinfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding : 15

    },
    userimage: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft : 3
        
    },
    userinfotext : {
        flexDirection : 'column',
        justifyContent : 'center',
        marginLeft : 10

    },
    bio : {
        fontSize : 12,
        color : '#666',
      
    },
    posttext :{
        fontSize: 14,
        paddingLeft : 15,
        paddingRight : 15
    },
    divider : {
        borderBottomColor : '#dddddd',
        borderBottomWidth : 1,
        width : '92%',
        alignSelf : 'center',
        marginTop : 15
    },

    interactionwrapper : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 15,

    },
    interaction : {
        flexDirection : 'row',
        justifyContent :'center',
        borderRadius : 5,
        paddingRight : 2,
        paddingLeft : 2,
        paddingBottom : 5,
        paddingTop : 5,
        
    },
    interactiontext :{
        fontSize:13,
        fontWeight :'bold',
        color : '#333',
        marginTop : -3,
        marginLeft : 5


    },

});