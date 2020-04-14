import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Details from './pages/Details';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#da552f' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="main"
          component={Main}
          options={{ title: 'JsHunt' }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{ title: 'JsHunt' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
