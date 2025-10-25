import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Todo from './components/Todo';
import UserProfile from './components/UserProfile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      {/* <Todo /> */}
      <UserProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 45
  },
});
