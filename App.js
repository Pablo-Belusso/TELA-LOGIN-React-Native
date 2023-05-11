import React from 'react';
import { StatusBar } from 'react-native'; // importa o "StatusBar" do react native

import { NavigationContainer } from '@react-navigation/native'; // importa o "NavigationContainer" do react native
import Rotas from './src/rotas';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Rotas />
    </NavigationContainer>
  );
}


