import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'


const UpdateArrays = () => {
    
    let [ABC, setAbc] = useState(['A', 'B', 'C', 'D'])
    
    const addOne = () => setAbc([...ABC, 'E'])
    const removeOne = () => setAbc(ABC.filter(f => f != 'C'))

    const updateOne = () => setAbc(ABC.map((f) => (f === 'A' ? 'Apple' : f)))

  return (
    <View style={{marginTop:40, gap:8}}>
      <FlatList data={ABC} keyExtractor={ABC => ABC} renderItem={({item}) => <Text>{item}</Text>} />
      <Button title='Add' onPress={addOne} />
      <Button title='Remove' onPress={removeOne} />
      <Button title='Update' onPress={updateOne} />
    </View>
  )
}

export default UpdateArrays