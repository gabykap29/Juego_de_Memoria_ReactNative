import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Inicio from './components/Inicio';
import Principal from './components/Principal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Game" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}