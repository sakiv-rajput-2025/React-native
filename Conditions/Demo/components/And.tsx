import { View, Text, FlatList } from 'react-native'
import React from 'react'

const And = () => {

    const grocery = ['Milk', 'Bread', 'Maza', 'Cheese']

  return (
    <View style={{marginTop:30}}>
        <Text>Cart 🛒</Text>

        {grocery.length > 0 && (<Text>You Have {grocery.length} items in your cart.</Text>)}

      <FlatList data={grocery} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  ) 
}

export default And