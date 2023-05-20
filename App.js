import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.iconContainer} source={require('first_react_program/assets/montage_test.png')} />
      <StatusBar style="auto" />
    </View>
  );
}
