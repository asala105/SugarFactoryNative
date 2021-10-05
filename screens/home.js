import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return ( 
        <ScrollView style={{backgroundColor : '#FBE8DA'}}>
            <Text>Hello from Home </Text>
        </ScrollView>
     );
}