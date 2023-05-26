import styles from 'first_react_program/screens/CreateAccount/CreateAccount_style';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <Button title="Create Account" onPress={() => {
                    // Implement your create account function here
                    console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);

                    // UNCOMMENTING THIS MAKES IT TO WHERE USER CAN'T NAV BACK
                    // TO CREATE ACCOUNT PAGE
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'Home' }],
                    // });
                    navigation.navigate('TabHome');
                }} />
            </View>
        </TouchableWithoutFeedback>
    );
};


export default CreateAccount;