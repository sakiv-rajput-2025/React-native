import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyEffect from './components/MyEffect';
import DataFetching from './components/DataFetching';
import SeaMealsFood from './components/SeaMealsFood';
import RandomUser from './components/RandomUser';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyEffect /> */}
      {/* <DataFetching /> */}
      {/* <SeaMealsFood /> */}
      <RandomUser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 5,
  },
});
