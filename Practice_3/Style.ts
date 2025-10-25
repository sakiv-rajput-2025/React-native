import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    card: {    
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        margin: 8,
        width: '90%',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
    }   
})

export default st