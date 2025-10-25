import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';
import NameComponent from './src/components/Q1/NameComponent';
import AgeComponent from './src/components/Q1/AgeComponent';
import HandleComponent from './src/components/Q1/HandleComponent';
import SubComponent from './src/components/Q1/SubComponent';
// import ComponentA from './src/components/ComponentA';

export default function App() {
  return <View style={styles.container}>
    <NameComponent />
    <AgeComponent />
    <HandleComponent />
    <SubComponent />
  </View>
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
