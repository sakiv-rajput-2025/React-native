import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from './components/MyForm';
import tw from 'twrnc'

function App() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      {/* <MyForm /> */}
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, assumenda.</Text>
    </View>
  );
}

export default App;