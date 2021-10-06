
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { Avatar, Caption, Title, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Settings() {
    const navigation = useNavigation();
    return ( 
        <ScrollView style={styles.container}>
            <View style = {styles.userInfoSection}>
                <View style={{flexDirection : 'row',marginTop :15}}>
                    <Avatar.Image 
                        source={require('../pictures/avatar2.svg')}
                        size ={80}/>
                    <View style ={{marginLeft : 20}}>
                        <Title style = {[styles.title,{marginTop :15 ,marginBottom : 5}]}>John Doe</Title>
                        <Caption style = {styles.caption}>John_doe@email.com</Caption>
                    </View>    
                </View>
            </View>
            <View style ={styles.userInfoSection}>
                <View style = {styles.row}>
                    <Icon name = 'user' color ="#777777" size ={20}/>
                    <Text style={{color : "#777777",marginLeft :22 }} >Bio</Text>
                </View>
                <View style = {styles.row}>
                    <Icon name = 'id-badge' color ="#777777" size ={20}/>
                    <Text style={{color : "#777777",marginLeft :22 }} >Nationality</Text>
                </View>
                <View style = {styles.row}>
                    <Icon name = 'list' color ="#777777" size ={20}/>
                    <Text style={{color : "#777777",marginLeft :17 }} >Hobbies</Text>
                </View>
                
            </View>
            <View style ={styles.infoBoxWrapper}>
                <View style = {[styles.infoBox,{borderRightColor : '#8C0C33',borderRightWidth : 2}]}>
                    <Title>$140</Title>
                    <Caption>Net Worth</Caption>
                </View>
                <View style = {styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Matches</Caption>
                </View>

            </View>
            <View style= {styles.menuWrapper}>
                <TouchableOpacity>
                    <View style = {styles.menuItem}>
                        <Icon name = 'heart' color = "#8C0C33" size={25} />
                        <Text style={styles.menuItemText}>My Favorites</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=>navigation.navigate('Settings')} >
                    <View style = {styles.menuItem}>
                        <Icon name = 'cog' color = "#8C0C33" size={25} />
                        <Text style={styles.menuItemText}>Edit Profile</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
        </ScrollView>
     );
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#FBE8DA'
    },
    userInfoSection : {
        paddingHorizontal : 30,
        marginBottom : 25
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold'
    },
    caption : {
        fontSize : 14,
        lineHeight : 24,
        fontWeight : '500'
    },
    row : {
        flexDirection : 'row',
        marginBottom : 10,
    },
    infoBoxWrapper :{
        
        flexDirection : 'row',
        height : 100
    },
    infoBox : {
        width : '50%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    menuWrapper : {
        marginTop : 10
    },
    menuItem : {
        flexDirection : 'row',
        paddingVertical : 15,
        paddingHorizontal : 30
    },
    menuItemText : {
        color : '#777777',
        marginLeft : 20,
        fontWeight : '600',
        fontSize : 16,
        lineHeight : 26
    }




})