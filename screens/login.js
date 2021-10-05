import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Login( {navigation}) {
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
        <View style={{ padding: 20}}>
          <Text style={{ color: '#8C0C33', fontSize: 24,fontWeight:'bold' }}>Welcome</Text>
          <Text>Don't have an account ?
          <Pressable onPress ={()=>navigation.navigate("Register")}>
             <Text style={{ color: '#8C0C33', fontStyle: 'italic' }}>  Register Now</Text>
          </Pressable>

            
          </Text>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10 }}> <Icon name="user" style={{ fontSize: 16 }} />  Email address</Text>
            <TextInput  placeholder=' Enter your email address' keyboardType='email-address' style={styles.inputs}></TextInput>

            <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:5 }}> <Icon name="lock" style={{ fontSize: 16 }} />  Password</Text>
            <TextInput placeholder=' Enter your password' keyboardType='email-address' style={styles.inputs}></TextInput>
          </View>
          {/* Button */}
          <View style={styles.buttonView}>
            
            <Pressable style={styles.button} >
              <Text style={styles.btntext}>Login</Text>
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
    height: 450
  },

  buttonView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor : 'white',
    borderRadius : 7,
    border: " 2px solid #8C0C33"
    
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 122,
    borderRadius: 50,
    elevation: 4,
    backgroundColor: '#8C0C33',
    marginTop : 15
  },
  btntext :{
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#F9DEC9',
  }

});