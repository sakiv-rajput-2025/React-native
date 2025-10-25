import { View, Text, Button } from 'react-native'
import React from 'react'

const withoutState = () => {

  let counter = 0

  return (
    <View style={{gap:5}}>
      <Text style={{marginBottom:5, marginTop:5, fontSize:20, fontWeight:'bold'}}>Count : {counter}</Text>
      <Button title='Increment' onPress={() => counter++ }/>
    </View>
  )
}

export default withoutState