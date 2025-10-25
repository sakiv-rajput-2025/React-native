import { useContext } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { RandomNumberContext } from "../context/RandomNumberContext";

const AddRandomNumber = () => {
  const context = useContext(RandomNumberContext);

  // Ensure context is not undefined
  if (!context) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Context is not provided!</Text>
      </View>
    );
  }

  const { addNumber } = context;

  const handleAddNumber = () => {
    addNumber(Math.floor(Math.random() * 100)); // Add a random number
  };

  return <Button title="Add Random Number" onPress={handleAddNumber} />;
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});

export default AddRandomNumber;
