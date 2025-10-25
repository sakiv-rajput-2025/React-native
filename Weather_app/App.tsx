import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

const WeatherApp = () => {
  const [city, setCity] = useState(""); // Input city name
  const [weather, setWeather] = useState(null); // Weather data
  const [loading, setLoading] = useState(false); // Loading state
  const API_KEY = "0e02381ecc3a4ad9715d4bdda67ef267";

  const fetchWeather = async () => {
    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={fetchWeather} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>City: {weather.name}</Text>
          <Text style={styles.weatherText}>
            Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
          </Text>
          <Text style={styles.weatherText}>
            Weather: {weather.weather[0].description}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f8ff",
    borderRadius: 5,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default WeatherApp;
