import { Text, View, Image } from 'react-native'
import React from 'react'

export default function ImageComponent() {
    return (
      <View>
        <Text>Let's Explore Images</Text>

        <Image source={require('../../assets/user_logo.png')} style={{height:151, width:151}} />
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhln4-ygosRcYC8XLmLPuh_bxZXFH8xpD48w&s"}} style={{height:150, width:150, borderRadius:100}} />
      </View>
    )
}