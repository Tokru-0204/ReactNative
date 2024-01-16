import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.style1}>LOGIN</Text>
      <TextInput style={styles.inputEmail} placeholder='Email'></TextInput>
      <View style={styles.inputPasswordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder='Password'
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.style2}>When you agree to terms and conditions</Text>
      <Text style={styles.style3}>For got your password?</Text>
      <Text style={styles.style4}>Or login with</Text>
      <View style={styles.style5}>
        <TouchableOpacity style={[styles.style5_1, styles.socialButton]}>
          <Image source={require('../Img/Facebook.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.style5_2, styles.socialButton]}>
          <Image source={require('../Img/Zalo.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.style5_3, styles.socialButton]}>
          <Image source={require('../Img/Google.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:'100%',
    backgroundColor: '#d8efde',
  },
  style1: {
    textAlign: 'center',
    width: 84,
    height: 29,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 29.3,
    color: '#000000',
    marginBottom:40,
    marginTop:20
  },
  inputEmail: {
    borderWidth: 1, 
    borderColor: '#F2F2F2',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width:330,
    height:54,
    padding:10,
    paddingHorizontal: 10,
    fontFamily:'Roboto',
    fontSize:18,
    lineHeight:21.09,
    marginBottom:16,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  inputPassword: {
    flex:1,
    borderColor: '#F2F2F2',
    width:330,
    height:54,
    padding:10,
    paddingHorizontal: 10,
    fontSize:18,
    lineHeight:21.09,
  },
  eyeIcon: {
    position: 'absolute',
    padding: 10,
  },
  loginButton: {
    width: 330,
    height: 54,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c34e3b',
    marginTop:34,
  }, 
  loginButtonText: {
    textAlign: 'center',
    color: '#d8efde',
    fontSize: 20,
    fontWeight: 'bold'
  },
  style2: {
    textAlign: 'center',
    width: 260,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#000000',
    marginTop: -5,
  },
  style3: {
    textAlign: 'center',
    width: 260,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#000000',
    marginTop:-15,
    color:'#5D25FA',
  },
  style4: {
    textAlign: 'center',
    width: 260,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#000000',
    marginTop: -15,
  },
  style5: {
    flexDirection: 'row',
    marginBottom:30,
    
  },
  style5_1: {
    backgroundColor: '#25479B',
    width:110,
    height:40,
    alignItems:'center',
    justifyContent:'center',

  },
  style5_2: {
    backgroundColor:'#0F8EE0',
    width:110,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  style5_3: {
    width:110,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0FF8EE0',
  },
});
