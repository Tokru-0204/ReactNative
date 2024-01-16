import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  const [chosenOption, setChosenOption] = useState(0);
  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.registerText}>REGISTER</Text>
      <TextInput style={styles.input} placeholder='Name'></TextInput>
      <TextInput style={styles.input} placeholder='Phone'></TextInput>
      <TextInput style={styles.input} placeholder='Email'></TextInput>
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
      <TextInput style={styles.input} placeholder='Birthday'></TextInput>
      <View style={styles.radio}>
        <RadioForm
          radio_props={options}
          initial={0}
          onPress={(option) => setChosenOption(option)}
          buttonSize={13}
          formHorizontal={true}
          labelStyle={{ fontSize: 18 }}
          style={styles.radioGroup}
          buttonColor='black'
          selectedButtonColor='black'
        />
      </View>
      <TouchableOpacity style={styles.registerButton} >
        <Text style={styles.register}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.policy}>When you agree to terms and conditions</Text>
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
  },
  registerText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 54,
    backgroundColor: '#C4C4C44D',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  radio: {
    width: '100%'
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 130,

  },
  registerButton: {
    width: '100%',
    height: 45,
    borderRadius: 2,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'

  },
  policy: {
    fontSize:14,
    marginTop:-10,
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '100%',

  },
  inputPassword: {
    flex: 1,
    height: 54,
    borderColor: '#F2F2F2',
    padding: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    lineHeight: 21.09,
  },
  eyeIcon: {
    position: 'absolute',
    padding: 10,
  },
});
