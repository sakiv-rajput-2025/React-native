import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListData from './components/ListData';
import ArrayOfObject from './components/ArrayOfObject';
import Practice from './components/Practice';

export default function App() {
  return <View style={styles.container}>
    {/* <ListData /> */}
    {/* <ArrayOfObject /> */}
    <Practice />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
