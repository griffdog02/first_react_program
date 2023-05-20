import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'first_react_program/screens/HomeScreen/HomeScreen.js';
import styles from './styles.js';
import LoginScreen from './screens/LoginScreen/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoginScreen />
  );
}

function AppScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>hello</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}