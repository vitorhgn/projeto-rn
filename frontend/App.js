import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
          options={({ navigation }) => ({
            title: 'Segmentos',
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  paddingLeft: 10 
                }}>
                <Icon name="arrow-back" size={24} color="#5f9ea0" />
                <Text style={{ fontSize: 18, color: '#5f9ea0', marginLeft: 5 }}>Voltar</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Parceiros"
          component={EmpresasScreen}
          options={({ navigation }) => ({
            title: 'Parceiros',
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  paddingLeft: 10 
                }}>
                <Icon name="arrow-back" size={24} color="#5f9ea0" />
                <Text style={{ fontSize: 18, color: '#5f9ea0', marginLeft: 5 }}>Voltar</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
