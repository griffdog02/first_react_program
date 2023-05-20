import styles from 'first_react_program/screens/LoginScreen/LoginScreen_style';
import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
                        // Implement sign in function here
                        console.log(`Username: ${username}, Password: ${password}`);

                        // UNCOMMENTING THIS MAKES IT TO WHERE USER CAN NOT NAV
                        // BACK TO THE LOGIN SCREEN
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: 'Home' }],
                        // });
                        navigation.navigate('Home');
                    }} />
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={styles.registerText}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default LoginScreen;