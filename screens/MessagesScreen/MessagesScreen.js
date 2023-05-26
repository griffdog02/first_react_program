import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from 'first_react_program/screens/HomeScreen/HomeScreen_styles.js';

// Define your screen component
const MessagesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}> THESE ARE YOUR MESSAGES </ Text>
            <Image
                style={styles.iconContainer}
                source={require('first_react_program/assets/montage_outline.png')}
                resizeMode='contain' />
        </View>
    );
};

export default MessagesScreen;