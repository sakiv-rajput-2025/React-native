import { View, Text } from "react-native";
import React from "react";
import ComponentB from "./ComponentB";

interface name {
  userName: string;
}

const ComponentA = () => {
  return (
    <View>
      <ComponentB />
    </View>
  );
};

export default ComponentA;
