import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObjects = () => {

    const [movie, setMovie] = useState({
        title: 'MUFASA',
        ratings: 8.9
    })

    const changeTitle = () => {
        setMovie({...movie, title: 'The Lion King'})
    }
    const changeRatings = () => {
        setMovie({...movie, ratings: 9.2})
    }

  return (
    <View style={{gap:8}}>
      <Text style={{fontSize:15}}>Title : {movie.title}</Text>
      <Text style={{fontSize:15}}>Ratings : {movie.ratings}</Text>
      <Button title='Change Title' onPress={changeTitle} />
      <Button title='Change Ratings' onPress={changeRatings} />
    </View>
  )
}

export default UpdateObjects