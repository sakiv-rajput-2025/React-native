import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ComponentA from "./components/ComponentA";
import { UserContext, UserProvider } from "./context/UserContext";
import { NumberProvider } from "./context/RandomNumberContext";
import RandomNumber from "./components/RandomNumber";
import AddRandomNumber from "./components/AddRandomNumber";
import WithCustomHook from "./components/WithCustomHook";

function App() {
  const uname = "John Doe";
  return (
    <View style={styles.container}>
      {/* <UserProvider>
        <ComponentA />
      </UserProvider> */}
      {/* <NumberProvider>
        <RandomNumber />
        <AddRandomNumber />
      </NumberProvider> */}
      <WithCustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});

export default App;
