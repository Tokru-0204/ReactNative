import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <Image source={require('../Img/eyeball.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
                <View style={styles.inputNameContainer}>
                    <Image source={require('../Img/user_2b.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Please input user name' placeholderTextColor={'#C4C4C4'} ></TextInput>
                </View>
                <View style={styles.inputPasswordContainer}>
                    <Image source={require('../Img/lock_2b.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Please input password' placeholderTextColor={'#C4C4C4'} secureTextEntry={true}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.Content}>
                <Text style={styles.ContentText}>Register</Text>
                <Text style={styles.ContentText}>Forgot password?</Text>
            </View>
            <View style={styles.lineAndTextContainer}>
                <View style={styles.line}></View>
                <Text style={styles.otherMethodsText}>Other login methods</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.userButton}>
                    <Image source={require('../Img/union.png')} style={{ width: 19, height: 19,marginLeft:45, marginBottom:45 }}></Image>
                    <Image source={require('../Img/user1_2b.png')} style={{ width: 38, height: 42, position:'absolute' }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wifiButton}>
                    <Image source={require('../Img/wifi.png')} style={{ width: 56, height: 47 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebookButton}>
                    <Image source={require('../Img/fb.png')} style={{ width: 32, height: 45 }}></Image>
                </TouchableOpacity>
            </View>
        </View >
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'space-evenly'
  }, logo: {
      width: 112.188,
      height: 107.199
  }, inputContainer: {
      width: '100%',
      justifyContent: 'space-around'
  }, icon: {
      position: 'absolute',
      left: 1,
      width: 32,
      height: 32
  }, inputNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }, inputPasswordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }, input: {
      width: '100%',
      height: 54,
      fontSize: 18,
      paddingRight: 10,
      paddingLeft: 60,
      borderWidth: 1,
      marginVertical: 10,
      borderColor: '#F2F2F2',
      borderBottomColor: '#C4C4C4',
      outlineStyle: 'none'
  }, 
  lineAndTextContainer: {
      flexDirection: ' row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
  }, line: {
      flex: 1,
      height: 1,
      backgroundColor: '#0E18F5'
  }, otherMethodsText: {
      fontSize: 18,
      marginHorizontal: 3,
  }, 
  loginButton: {
      borderRadius: 10,
      backgroundColor: '#386FFC',
      width: '100%',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center'
  }, 
  loginButtonText: {
      fontSize: 18,
      color: '#fff'
  },
  Content: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
  }, 
  ContentText: {
    fontSize: 18
  },
  buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
  }, 
  userButton: {
      width: 74,
      height: 74,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3AB4FF',
      borderRadius: 10
  },
  wifiButton: {
      width: 74,
      height: 74,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4AA47',
      borderRadius: 10
  },
  facebookButton: {
      width: 74,
      height: 74,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3A579C',
      borderRadius: 10
  }
})