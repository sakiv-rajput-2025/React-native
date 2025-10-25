import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const WheatherData = {
    London : "20°C , Clear",
    Paris: "22°C , Sunny",
    NewYork: "18°C , Cloudy"
}

const WheatherApp = () => {

    const [city, setCity] = useState('')
    const [weather , setWeather] = useState('')

    const getWeather = () => {
        setWeather(WheatherData[city] || "No Data Available!")
    }

  return (
    <View>
      <Text style={styles.title}>Weather App</Text>
      <TextInput placeholder='Enter City' value={city} onChangeText={setCity} style={styles.input} />
      <Button title='Get Weather' onPress={getWeather}/>
      {weather ? <Text style={styles.weather}>{weather}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      marginTop: 50,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      marginTop: 50,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    weather: {
      fontSize: 18,
      marginTop: 20,
    },
  });

export default WheatherApp