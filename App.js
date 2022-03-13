import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonList from './PokemonList'
import Home from './Home'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="PokeDex" component={PokemonList} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;