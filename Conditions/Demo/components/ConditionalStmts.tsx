import { View, Text } from 'react-native'
import React from 'react'

const ValidPasswd = () => <Text>Valid Password</Text>;
const InvalidPasswd = () => <Text>In-Valid Password</Text>;

function Passwd({ isValid }) {
    if (isValid) {
        return <ValidPasswd />;
    }
    return <InvalidPasswd />;
}


const ConditionalStmts = () => {
  return (
    <View>
      <Passwd isValid={false} />
    </View>  
  )
}

export default ConditionalStmts