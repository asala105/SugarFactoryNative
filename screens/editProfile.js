import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function EditProfile() {
    return ( 
        <View style={{backgroundColor : '#FBE8DA',height: '100%'}}>
            <View style ={{margin:20}}>
                <View style ={{alignItems:'center'}}>
                    <TouchableOpacity onPress ={() =>{}} >
                        <View style ={{height: 100,width :100,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <ImageBackground source={require('../pictures/avatar2.svg')} style={{height:100, width:100}} imageStyle = {{borderRadius: 15}}>
                                <View style ={{flex: 1,justifyContent :'center', alignItems: 'center'}}>
                                    <Icon name = 'camera' size ={35} color="#fff" style ={{
                                        opacity : 0.7,
                                        alignItems :'center',
                                        justifyContent :'center',
                                        borderWidth : 1,
                                        borderColor :'#fff',
                                        borderRadius :10
                                    }} />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style ={{marginTop:10,fontSize:18,fontWeight:'bold'}}>
                        John Doe
                    </Text>
                </View>
                <View style ={{marginTop : 40}}>
                    <View style = {styles.action}>
                        <Icon name ='calendar' size ={16} />
                        <TextInput
                            placeholder = "Date of Birth"
                            placeholderTextColor = "#666666"
                            autoCorrect ={false}
                            style ={styles.textInputt} />
                            
                    </View>
                    <View style = {styles.action}>
                        <Icon name ='ellipsis-v' size ={16} />
                        <TextInput
                            placeholder = "Height"
                            placeholderTextColor = "#666666"
                            autoCorrect ={false}
                            style ={styles.textInputt} />
                            
                    </View>
                    <View style = {styles.action}>
                        <Icon name ='balance-scale' size ={16} />
                        <TextInput
                            placeholder = "Weight"
                            placeholderTextColor = "#666666"
                            keyboardType ='email-address'
                            autoCorrect ={false}
                            style ={styles.textInputt} />
                            
                    </View>
                    <View style = {styles.action}>
                        <Icon name ='id-badge' size ={16} />
                        <TextInput
                            placeholder = "nationality"
                            placeholderTextColor = "#666666"
                            autoCorrect ={false}
                            style ={styles.textInputt} />
                            
                    </View>
                </View>
                <TouchableOpacity style={styles.commandButton} onPress ={()=>{}}>
                      <Text style ={styles.panelButtonTitle}>Save Changes</Text>                  
                </TouchableOpacity>

            </View>
        </View>
     );
}

const styles = StyleSheet.create({

    container : {
        flex : 1
    },
    commandButton :{
        padding : 15,
        borderRadius : 10,
        backgroundColor : '#8C0C33',
        alignItems : 'center',
        marginTop : 10
    },
    panel : {
        padding : 20,
        backgroundColor : '#FFFFFF',
        paddingTop : 20
    },
    header : {
        backgroundColor : '#FFFFFF',
        shadowColor : '#333333',
        shadowOffset : {width : -1,height: -3},
        shadowRadius : 2,
        shadowOpacity : 0.4,
        paddingTop : 20,
        borderTopLeftRadius : 20,
        borderTopRightRadius :20
    },
    panelHeader : {
        alignItems : 'center'
    },
    panelHandel : {
        width: 40,
        height : 8,
        borderRadius : 4,
        backgroundColor : '#00000040',
        marginBottom : 10
    },
    panelTitle : {
        fontSize : 27,
        height : 35
    },
    panelSubtitle : {
        fontSize : 24,
        color : 'gray',
        height : 30,
        marginBottom : 10
    },
    panelButton : {
        padding : 13,
        borderRadius : 10,
        backgroundColor : '#ff6347',
        alignItems : 'center',
        marginVertical : 7
    },
    panelButtonTitle : {
        fontSize : 17,
        fontWeight : 'bold',
        color : '#FBE8DA'
    },
    action : {
        flexDirection : 'row',
        marginTop : 15,
        marginBottom : 15,
        borderBottomWidth : 1,
        borderBottomColor : '#8C0C33',
        paddingBottom : 5
    },
    actionError : {
        flexDirection : 'row',
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#ff0000',
        paddingBottom : 5
    },
    textInputt :{
        flex : 1,
        marginTop : Platform.OS == 'ios' ? 0 : -12,
        paddingLeft :10,
        color : '#05375a'
    }


});