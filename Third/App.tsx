import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DynamicContent from './components/DynamicContent';
import Practice from './components/Practice';

export default function App() {
  return (
    <View>
      {/* <DynamicContent /> */}
      <Practice />
    </View>
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
