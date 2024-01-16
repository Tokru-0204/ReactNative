import { TouchableOpacity, Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: "100%",
    backgroundColor:'#00CCF9',
    
  },
  circle: {
    width: 140,
    height: 140,
    borderWidth: 15,
    borderRadius: "50%",
    marginTop:50,
  },
  style1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop:-15,
  }, style2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop:-15,
  },
  style3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
