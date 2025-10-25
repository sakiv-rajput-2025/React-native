import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();
      // console.log(result)
      setData(result);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}: {item.username}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataFetching;
