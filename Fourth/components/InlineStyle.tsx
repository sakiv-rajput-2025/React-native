import { View, Text } from 'react-native'
import React from 'react'

const InlineStyle = () => {
  return (
    <View>
      <Text>InlineStyle</Text>
      <View style={{backgroundColor:'red', height:100, width:100}} />
    </View>
  )
}

export default InlineStyle