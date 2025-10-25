import { View, Text } from 'react-native'
import React from 'react'
import st from './Card'

export default function NameComponent() {
  return (
    <View>
      <Text style={st.card}>My Name is ABC</Text>
    </View>
  )
}