import { View, Text, Button, Alert, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function ButtonComponents() {
  return (
    <View>
      <Text>ButtonComponents</Text>
      <View style={styles.container}/>
      <Button title='Press Me!' color='#841484' onPress={() => console.log('Simple Button Presed')}/>
      <Pressable onPress={() => console.log("Pressable is Press!")} style={styles.container}>
        <Text style={{color: 'yellow'}}>Pessable</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("Pressable is Press In!")} style={styles.container}>
        <Text style={{color: 'blue'}}>Pessable</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("Pressable is Press Out!")} style={styles.container}>
        <Text style={{color: 'red'}}>Pessable</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("Pressable is Long Press!")} style={styles.container}>
        <Text style={{color: 'green'}}>Pessable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    }
})