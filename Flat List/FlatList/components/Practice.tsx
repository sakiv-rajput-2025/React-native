import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const Practice = () => {

    interface Product {
        image: string,
        name: string,
        rating: number,
        price: number,
    }

    const products = [
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
        {
            image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
            name: "Nature",
            rating: 3.5,
            price: 4.99,
        },
    ]

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <View style={styles.productContainer}>
                <Image source={{ uri: item.image }} style= {styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>Rating: {item.rating}</Text>
                <Text style={styles.price}>Price: ${item.price}</Text>
            </View>
        );
    };
    

  return (
    <View>
      <FlatList 
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        marginTop: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        marginTop: 5,
        color: '#000'
    }
})

export default Practice