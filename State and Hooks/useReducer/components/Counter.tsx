import { View, Text, Button } from "react-native";
import { useReducer } from "react";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

const initialState = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled Error Type");
  }
}

const Counter = () => {
  const [state, diapatch] = useReducer(reducer, initialState);

  return (
    <View style={{ gap: 8 }}>
      <Text>Count : {state.count} </Text>
      <Button
        title="Increment"
        onPress={() => diapatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => diapatch({ type: "decrement" })}
      />
    </View>
  );
};

export default Counter;