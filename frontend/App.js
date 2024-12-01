// App.js

import 'react-native-gesture-handler'; // Deve ser importado no topo
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SegmentosScreen from './screens/SegmentosScreen';
import EmpresasScreen from './screens/EmpresasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Associações Parceiras' }}
        />
        <Stack.Screen
          name="Segmentos"
          component={SegmentosScreen}
          options={{ title: 'Segmentos' }}
        />
        <Stack.Screen
          name="Empresas"
          component={EmpresasScreen}
          options={{ title: 'Empresas Parceiras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
