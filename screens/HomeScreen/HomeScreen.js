// Import necessary modules
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from 'first_react_program/screens/HomeScreen/HomeScreen_styles.js';

// Define your screen component
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}> Welcome To... </ Text>
            <Image
                style={styles.iconContainer}
                source={require('first_react_program/assets/montage_outline.png')}
                resizeMode='contain' />
        </View>
    );
};

export default HomeScreen;