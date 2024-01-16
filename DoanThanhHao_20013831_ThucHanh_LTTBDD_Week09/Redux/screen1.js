import { StyleSheet, Text, View } from 'react-native';
import Component1 from "./component1"
import { Provider } from 'react-redux'
import Store from './redux/store';

export default function Screen1() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Component1 />
      </View>
    </Provider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});