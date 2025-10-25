import { View, Text } from 'react-native'
import React from 'react'

const ValidPasswd = () => <Text>Valid Password</Text>;
const InvalidPasswd = () => <Text>In-Valid Password</Text>;

function Passwd({ isValid }) {
    return isValid ? <ValidPasswd /> : <InvalidPasswd />
}


const TernoryOperator = () => {
  return (
    <View>
      <Passwd isValid={false} />
    </View>  
  )
}

export default TernoryOperator