import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InlineStyle from './components/InlineStyle';
import InternalStyle from './components/InternalStyle'
import ExternalStyle from './components/ExternalStyle';

export default function App() {
  return (
    <View>
      {/* <InlineStyle /> */}
      {/* <InternalStyle /> */}
      <ExternalStyle />
      <StatusBar style="auto" />
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
