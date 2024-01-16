import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient
    colors={['#C7F4F6',
      '#C7F4F6',
      '#C7F4F6',
      '#D1F4F6',
      '#D1F4F6',
      '#D1F4F6',
      '#E5F4F5',
      '#E5F4F5',
      '#00CCF9']} style={styles.container}>
        <Image source={require('../Img/Lock.png')} style = {styles.style1} />
        <Text style={styles.style2}>FORGET{"\n"}PASSWORD</Text>
        <Text style={styles.style3}>Provide your account’s email for which you {"\n"}want to reset your password</Text>
      
        <View style={styles.style4}>
            <Image source={require('../Img/Mail.png')} style={styles.icon} />
            <TextInput placeholder='Email' style={styles.textInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:"100%",
  },
  style1: {
    width: 105,
    height: 117,
    marginTop:30,
  },
  style2: {
    textAlign: 'center',
    width: 150,
    height:58,
    fontFamily:'Roboto',
    fontWeight: 'bold',
    lineHeight: 29.3,
    fontSize: 25,
    color:'#000000',
    marginTop:-10,
  },
  style3: {
    textAlign: 'center', 
    width: 302,
    height: 53,
    fontFamily:'Roboto',
    fontWeight: 'bold',
    lineHeight: 17.58,
    fontSize: 15,
    color:'#000000',
    marginTop:-20,
  },
  style4: {
    width: 305,
    height: 45,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -50,
  },
  icon: {
    position: 'absolute',
    width: 48,
    height: 42,
  },
  textInput: {
    width:'100%',
    backgroundColor: '#C4C4C4',
    height: 45,
    paddingHorizontal: 50,
  },
  button: {
    width: 305,
    height: 45,
    backgroundColor: "#E3C000",
    marginBottom:50,
    marginTop:-20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily:'Roboto',
    color: '#000000',
    lineHeight: 21.09,
    marginTop:10,
  },
});
