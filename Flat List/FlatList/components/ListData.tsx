import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    const friuts = ['Apple', 'Banana', 'Papaya'];

  return (
    <View style={{marginTop:30}}>
        <FlatList 
            data={friuts} 
            keyExtractor={(item) => item}
            renderItem={({item}) => {
                return <Text>{item}</Text>
        }}/>
    </View>
  )
}

export default ListData