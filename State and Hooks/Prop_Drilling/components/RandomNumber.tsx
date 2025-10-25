import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RandomNumberContext } from "../context/RandomNumberContext";

const RandomNumber = () => {
  const context = useContext(RandomNumberContext);

  // Ensure context is not undefined
  if (!context) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Context is not provided!</Text>
      </View>
    );
  }

  const { num } = context;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Numbers List:</Text>
      <FlatList
        data={num.map((n, index) => ({ id: index.toString(), value: n }))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
  error: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});

export default RandomNumber;
