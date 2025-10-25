import { View, Text, FlatList } from "react-native";
import useFetch from "../hooks/useFetch";

const WithCustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default WithCustomHook;
