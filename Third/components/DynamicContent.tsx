import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
    const uName = 'ABC'
    const Multiply = (a:number, b:number) => a*b
    // let me = {name:'ABC', age:23}

  return (
    <View>
      <Text>My name is {uName}</Text>
      <Text>Multiply : {Multiply(2,2)}</Text>
      <Text>{2+2}</Text>
    </View>
  )
}

export default DynamicContent