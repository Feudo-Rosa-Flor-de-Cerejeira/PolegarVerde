import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Onboard from '../pages/Onboard';
import Login from '../pages/Login';
import Login2 from '../pages/Login2';
import GuiaVerde from '../pages/GuiaVerde';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName='Home'>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="GuiaVerde" component={GuiaVerde} />
        <Stack.Screen name="Onboard" component={Onboard} />
      </Stack.Navigator>
  );
}