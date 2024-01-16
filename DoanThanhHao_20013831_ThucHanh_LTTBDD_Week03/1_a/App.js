import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.circle}></View>
      <Text style={styles.style1}>GROW {"\n"}YOUR BUSINESS</Text>
      <Text style={styles.style2}>
        We will help you to grow your business using {"\n"}online server
      </Text>
      <View style={styles.style3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.style4}>
          HOW WE WORK?
      </Text>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: "100%",
  },
  circle: {
    width: "142px",
    height: "142px",
    borderWidth: 15,
    borderRadius: "50%",
  },
  style1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily:'Roboto',
  }, style2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily:'Roboto',
    marginTop: -25,

  },
  style3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:-35,
  },
  style4: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily:'Roboto',
    marginTop:-40,
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Roboto',
  }
});