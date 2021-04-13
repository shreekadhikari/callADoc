import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LoginScreen from './assets/screens/LoginScreen';
import RegistrationScreen from './assets/screens/RegistrationScreen';
import WelcomeScreen from './assets/screens/WelcomeScreen';

export default function App() {
  return (
    <RegistrationScreen />
  );
}

