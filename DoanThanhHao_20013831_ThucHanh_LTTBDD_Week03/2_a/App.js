import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
        <Text style={styles.header}>LOGIN</Text>
        <View style={styles.inputNameContainer}>
        <Image style={styles.icon} source={require('../Img/avatar_user.png')} />
        <TextInput style={styles.input} placeholder='Name'></TextInput>
        </View>
        
        <View style={styles.inputPasswordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder='Password'
          secureTextEntry={!isPasswordVisible}
        />
        <Image style={styles.icon} source={require('../Img/avatar_lock.png')} />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>CREATE ACCOUNT</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#d8efde',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: "100%",
    fontFamily:'Roboto',
    backgroundImage:'linear-gradient(#FBCB00 50%,#BF9A00 100%)',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 100,
    height:35,
    right: 110,
    marginTop:30,
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 55,
    fontSize: 18,
    lineHeight: 21.09,
    fontWeight:'bold',
  },
  inputNameContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '100%',
    borderColor:'#F2F2F2',
    borderWidth:1,
    marginTop: -25,
    marginTop:20,
  },
  icon:{
    width: 32,
    height: 32,
    position: 'absolute',
    left: 10,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '100%',
    borderColor:'#F2F2F2',
    borderWidth:1,
    marginTop: -25,
  },
  inputPassword: {
    flex: 1,
    height: 54,
    paddingHorizontal: 55,
    fontSize: 18,
    lineHeight: 21.09,
    fontWeight:'bold',
  },
  eyeIcon: {
    position: 'absolute',
    padding: 10,
  },
  loginButton: {
    marginTop:10,
    width: '100%',
    height: 50,
    borderRadius: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  footer: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 75,
    fontWeight: 'bold',
    marginTop:-20,
    marginBottom:80,
  },
});
