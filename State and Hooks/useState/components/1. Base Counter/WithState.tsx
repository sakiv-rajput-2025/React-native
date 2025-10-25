import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {

    let [count, setCount] = useState(0)
    console.log(count)

  return (
    <View style={{gap:5}}>
      <Text style={{marginBottom:5, marginTop:5, fontSize:20, fontWeight:'bold'}}>Count : {count}</Text>
      <Button title='Increment' onPress={() => setCount(count+1)}/>
      <Button title='Decrement' onPress={() => setCount(count-1)}/>
    </View>
  )
}

export default WithState