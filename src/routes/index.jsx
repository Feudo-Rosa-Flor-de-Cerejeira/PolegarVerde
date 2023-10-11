import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Onboard from '../pages/Onboard';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName='Home'>


        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboard" component={Onboard} />
      </Stack.Navigator>

  );
}