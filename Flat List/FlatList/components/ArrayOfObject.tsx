import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    const locations = [
        {
            id : 1,
            name: 'A'
        },
        {
            id : 2,
            name: 'B'
        },
        {
            id : 3,
            name: 'C'
        },
        {
            id : 4,
            name: 'D'
        },
        {
            id : 5,
            name: 'E'
        }
    ]


  return (
    <View style={{marginTop:40}}>
      <FlatList 
        keyExtractor={item => item.id.toString()} 
        data={locations} 
        renderItem={({item}) => 
            <Text>{item.name}</Text>}/>
    </View>
  )
}

export default ArrayOfObject