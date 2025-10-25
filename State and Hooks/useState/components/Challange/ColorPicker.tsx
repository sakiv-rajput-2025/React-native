import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const colors = ["yellow", "blue", "red", "green"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  return (
    <View style={{ backgroundColor: selectedColor, marginTop: 100 , height: '100%', width: '100%'}}>
      <Text style={styles.title}>Pick a Color</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '800',
    fontFamily: 'times new roman'
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 100,
    borderWidth: 1
  },
});

export default ColorPicker;