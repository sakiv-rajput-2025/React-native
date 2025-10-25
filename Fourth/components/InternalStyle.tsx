import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InlineStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Internal Style</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'crismos',
        fontSize: 30,
        backgroundColor: 'yellow',
        margin: 20,
        padding: 20
    }
})

export default InlineStyle