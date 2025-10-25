import { View, Text } from 'react-native'
import React from 'react'
import st from './Card'

export default function SubComponent() {
  return (
    <View>
      <Text style={st.card}>I Love React Native</Text>
    </View>
  )
}