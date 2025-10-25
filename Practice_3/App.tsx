import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NameComponent from './src/components/NameComponent';
import AgeComponent from './src/components/AgeComponent';
import XHandlerComponent from './src/components/XHandlerComponent';
import FavSubComponent from './src/components/FavSubComponent';

export default function App() {
  return <View style={{marginTop:30}}>
    <NameComponent />
    <AgeComponent />
    <XHandlerComponent />
    <FavSubComponent />
    <StatusBar style="auto" />
  </View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 1,
        marginTop: 30,
        width: '90%',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
  },
});
