import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SquareOTPInput from './OTPInput';
import { LinearGradient } from 'expo-linear-gradient';

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
      <Text style={styles.style1}>CODE</Text>
      <Text style={styles.style2}>VERIFICATION</Text>
      <Text style={styles.style3}>Enter ontime password sent on {'\n'}++849092605798</Text>
      <SquareOTPInput />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
          VERIFY CODE
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
  style1:{
    textAlign: 'center',
    width: 180,
    height:70,
    fontFamily:'Roboto',
    fontWeight: 'bold',
    fontSize: 60,
    color:'#000000',
    marginTop:70,
  },
  style2: {
    textAlign: 'center',
    width: 302,
    height:53,
    fontFamily:'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight:23.44,
    color:'#000000',
    marginTop:30,
  },
  style3: {
    textAlign: 'center',
    width: 302,
    height:53,
    fontFamily:'Roboto',
    fontSize: 15,
    lineHeight:17.58,
    color:'#000000',
    fontWeight: 'bold',
    marginBottom:-50,
  },
  button: {
    alignItems:'center',
    backgroundColor: '#E3C000',
    width: 350,
    height: 50,
    marginBottom:50,
    marginTop:-20,
  },
  buttonText: {
    textAlign:'center',
    width: 140,
    height:21,
    fontFamily:'Roboto',
    fontSize: 18,
    lineHeight:17.58,
    color:'#000000',
    fontWeight: 'bold',
    lineHeight:21.09,
    marginTop:15,
  },
});
