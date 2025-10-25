import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";

const MyEffect = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    console.warn("useEffect Called!")
  }, [value])

  return (
    <View>
      <Text>Value : {value}</Text>
      <Text>Something : {something}</Text>

      <Button title="Increment" onPress={() => setValue(value + 1)} />
      <View style={{marginBottom: 5}}/>
      <Button title="Something" onPress={() => setSomething(value + 1)} />
    </View>
  );
};

export default MyEffect;
