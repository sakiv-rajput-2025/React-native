import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConditionalStmts from './components/ConditionalStmts';
import And from './components/And';
import TernoryOp from './components/TernoryOp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ConditionalStmts /> */}
      {/* <And /> */}
      <TernoryOp />
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
