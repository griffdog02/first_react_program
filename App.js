import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'first_react_program/screens/HomeScreen/HomeScreen.js';
import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import CreateAccount from './screens/CreateAccount/CreateAccount.js';
import MessagesScreen from './screens/MessagesScreen/MessagesScreen.js';
import CreateMontage from './screens/CreateMontage/CreateMontage.js';

import homeIcon from './assets/homeIcon.png';
import messageIcon from './assets/messageIcon.png';
import montageIcon from './assets/logoIcon.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = homeIcon;
          } else if (route.name === 'Montage') {
            icon = montageIcon;
          } else if (route.name === 'Messages') {
            icon = messageIcon;
          }

          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={icon} style={{ width: size, height: size, tintColor: color }} resizeMode="center" />
            </View>
          );
        },

        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Montage" component={CreateMontage} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name="TabHome" component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}