import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../api';

export default function Register({navigation}) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userFname, setUserFname] = useState('');
    const [userLname, setUserLname] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userInterest, setUserInterest] = useState('');
    const [errortext, setErrortext] = useState('');
    const [registerEnabled, setRegisterEnabled] = useState(false);
  
  const handleRegister = () => {
    console.log('register');
      setErrortext('');
      if ((!userEmail) || (!userPassword) || (!userFname) || (!userLname) || (!userGender) || (!userInterest)) {
        setErrortext('All fields are required');
        return;
      }
      let dataToSend = {first_name:userFname, last_name:userLname, email: userEmail, password: userPassword, gender: userGender, interested_in:userInterest};
      console.log(dataToSend);
      api.register(dataToSend, { headers: { 'Accept': "application/json", 'content-type': "application/json" } })
      .then(response => {
          console.log(response);
          // If server response message same as Data Matched
          if (response.status === 201) {
            console.log(response);
            //AsyncStorage.setItem('access_token', response.data.access_token);
            console.log(response.data.access_token);
            //navigation.replace('DrawerNavigationRoutes'); Will be added when mohammad is done with the home page
          } else {
            console.log('Please check your email id or password');
          }
        })
        .catch((error) => {
          //Hide Loader
          console.error(error);
        });
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            
            <View style={styles.bottomView}>
                {/* Welcome View */}
                <View style={{ padding: 20 }}>
                    <Text style={{ color: '#8C0C33', fontSize: 24, fontWeight: 'bold' }}>Create an account</Text>
                    
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10  }}> <Icon name="user" style={{ fontSize: 16 }} /> First Name</Text>
                        <TextInput placeholder=' Enter your first name' keyboardType='email-address' style={styles.inputs}
                        onChangeText={(userFirstName) => setUserFname(userFirstName)}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:7 }}> <Icon name="user" style={{ fontSize: 16 }} />  Last Name</Text>
                        <TextInput placeholder=' Enter your last name' keyboardType='email-address' style={styles.inputs}
                        onChangeText={(userLastName) => setUserLname(userLastName)}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:7  }}> <Icon name="envelope" style={{ fontSize: 16 }} />  Email address</Text>
                        <TextInput placeholder=' Enter your email address' keyboardType='email-address' style={styles.inputs}
                        onChangeText={(UserEmail) => setUserEmail(UserEmail)}></TextInput>

                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:7  }}> <Icon name="lock" style={{ fontSize: 16 }} />  Password</Text>
                        <TextInput placeholder=' Enter your password' keyboardType='email-address' style={styles.inputs}
                        onChangeText={(userPass) => setUserPassword(userPass)}></TextInput>




                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:7 }}> <Icon name="venus-mars" style={{ fontSize: 16 }} />  Gender</Text>
                        <Picker

                            style={{ height: 40, width: 318 , backgroundColor :"white",borderRadius :7,border:"2px solid #8C0C33  " }}
                            mode={"dialog"}
                            onValueChange={(UserGender) => setUserGender(UserGender)}

                        >

                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>

                        <Text style={{ color: '#8C0C33', fontSize: 14, fontWeight: 'normal',marginBottom:10, marginTop:7 }}> <Icon name="filter" style={{ fontSize: 16 }} />  Interested In</Text>
                        <Picker

                            style={{ height: 40, width: 318, backgroundColor :"white",borderRadius :7,border:"2px solid #8C0C33 " }}
                            mode={"dialog"}
                            onValueChange={(UserInterest) => setUserInterest(UserInterest)}
                        >

                            <Picker.Item label="Male" value={0} />
                            <Picker.Item label="Female" value={1} />
                        </Picker>
                    </View>
                    {/* Button */}

                    <View style ={{marginTop :30}}>
                        <Text>Already have an account ?
                            <Text style={{ color: '#8C0C33', fontStyle: 'italic' }}>  Go Back</Text>
                        </Text>
                        <View style={styles.buttonView}>

                            <Pressable style={styles.button} onPress={handleRegister}>
                                <Text style={styles.btntext}>Register</Text>
                            </Pressable>
                    </View>
                    


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
        height: 700,
        marginBottom : 10
        
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
    },
    btntext: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#F9DEC9',
    }

});