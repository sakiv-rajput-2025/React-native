import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const Practice = () => {
  
  const [tnf, setValue] = useState({
    title: 'On'
  })

  const changeTitle = () => {
    setValue({...tnf, title: tnf.title === 'On' ? 'Off' : 'On'})
  }

  return (
    <View>
      <Text style={{fontSize: 25}}>Title: {tnf.title}</Text>
      <Button title='toggle' onPress={changeTitle}/>
    </View>
  )
}

export default Practice 