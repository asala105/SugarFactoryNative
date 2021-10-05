import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Register() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('../pictures/couple1.png')}
                style={styles.image}>

            </ImageBackground>
            <View style={{ marginTop: -170 }} >
                <Image source={require('../pictures/Logosingle.png')} style={styles.icon} />
            </View>

            {/* Bottom view */}
            <View style={styles.bottomView}>
                {/* Welcome View */}
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#8C0C33', fontSize: 24, fontWeight: 'bold' }}>Create an account</Text>
                    <Text>Already have an acoount ?
                        <Text style={{ color: '#8C0C33', fontStyle: 'italic' }}>  Go Back</Text>
                    </Text>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="user" style={{ fontSize: 20 }} /> First Name</Text>
                        <TextInput placeholder='Enter your first name' keyboardType='email-address' style={styles.inputs}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="user" style={{ fontSize: 20 }} />  Last Name</Text>
                        <TextInput placeholder='Enter your last name' keyboardType='email-address' style={styles.inputs}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="envelope" style={{ fontSize: 20 }} />  Email address</Text>
                        <TextInput placeholder='Enter your email address' keyboardType='email-address' style={styles.inputs}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="lock" style={{ fontSize: 20 }} />  Password</Text>
                        <TextInput placeholder='Enter your password' keyboardType='email-address' style={styles.inputs}></TextInput>




                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="venus-mars" style={{ fontSize: 20 }} />  Gender</Text>
                        <Picker

                            style={{ height: 50, width: 250 , backgroundColor :"#F9DEC9" }}
                            mode={"dialog"}
                            

                        >

                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>

                        <Text style={{ color: '#8C0C33', fontSize: 18, fontWeight: 'normal' }}> <Icon name="filter" style={{ fontSize: 20 }} />  Interested In</Text>
                        <Picker

                            style={{ height: 50, width: 250, backgroundColor :"#F9DEC9" }}
                            mode={"dialog"}

                        >

                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>
                    </View>
                    {/* Button */}
                    <View style={styles.buttonView}>

                        <Pressable style={styles.button} >
                            <Text style={styles.btntext}>Register</Text>
                        </Pressable>


                    </View>





                </View>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    image: {
        height: Dimensions.get('window').height / 2.5,
        marginTop: 0,
        opacity: 0.4

    },
    icon: {
        height: 170,
        width: 170,
        marginLeft: 100,
        opacity: 1,
        marginTop: -30
    },

    bottomView: {
        flex: 1.5,
        backgroundColor: '#F9DEC9',
        bottom: 0,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        height: 700
    },

    buttonView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 52,
        borderRadius: 50,
        elevation: 4,
        backgroundColor: '#8C0C33',
    },
    btntext: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#F9DEC9',
    }

});