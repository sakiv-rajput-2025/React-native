import { View, Text } from 'react-native'
import React from 'react'
import st from '../util/Style'


const ExternalStyle = () => {
  return (
    <View>
      <Text style={st.textStyle}>External Style</Text>
    </View>
  )
}

export default ExternalStyle