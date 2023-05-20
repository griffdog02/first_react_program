import styles from 'first_react_program/screens/LoginScreen/LoginScreen_style';
import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('first_react_program/assets/main_logo.png')}
                    resizeMode='contain'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Sign In" onPress={() => {
                    // Implement your sign in function here
                    navigation.navigate('Home');
                }} />
                <TouchableOpacity onPress={() => console.log('Navigate to Register')}>
                    <Text style={styles.registerText}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>

    );
};

export default LoginScreen;