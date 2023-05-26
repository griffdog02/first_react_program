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

import homeIcon from 'assets/home_icon.png';
import messageIcon from 'assets/message_icon.png';
import montageIcon from 'assets/montage_icon.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            iconName = homeIcon;
          } else if (route.name === 'Montage') {
            iconName = montageIcon;
          } else if (route.name === 'Messages') {
            iconName = messageIcon;
          }

          return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
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
      <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
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