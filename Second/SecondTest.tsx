import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

function SecondTest() {
    return (
        <View style={styles.container}>
            <Image source={require('../Second/assets/user_logo.png')} style={styles.image} />
            <Text style={styles.nameText}>Your Name</Text>
            <Text style={styles.descriptionText}>My Name Is ABC and I Love Coding</Text>
            <Button title="Press Me" color={'#808080'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 50,
        paddingBottom: 40,
        margin: 20,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 100,
        marginBottom: 20, // Makes the image circular
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default SecondTest;