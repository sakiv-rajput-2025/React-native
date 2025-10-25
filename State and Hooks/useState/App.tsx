import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WithoutState from './components/1. Base Counter/WithoutState';
import WithState from './components/1. Base Counter/WithState';
import UpdateArrays from './components/2. Updating Arrays/UpdateArrays';
import UpdateObjects from './components/3. Update Objects/UpdateObjects';
import SharingState from './components/4. Sharing State/SharingState';
import Practice from './components/Challange/Practice';
import WheatherApp from './components/Challange/WheatherApp';
import ColorPicker from './components/Challange/ColorPicker';
import LoginPage from './components/Challange/LoginPage';
import Todo from './components/Challange/Todo';

export default function App() {
  return <View>
    {/* <WithoutState />
    <WithState /> */}
    {/* <UpdateArrays /> */}
    {/* <UpdateObjects /> */}
    {/* <SharingState /> */}
    {/* <Practice /> */}
    {/* <WheatherApp /> */}
    {/* <ColorPicker /> */}
    {/* <LoginPage /> */}
    <Todo />
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
