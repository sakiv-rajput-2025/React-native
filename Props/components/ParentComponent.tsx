import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>

      <ChildComponent name="ABC" age={23} hobbies={['A','B','C','D']} />
    </View>
  )
}

export default ParentComponent