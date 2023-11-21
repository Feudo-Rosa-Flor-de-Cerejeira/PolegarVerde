import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import SyneBold from './assets/fonts/Syne-Bold.ttf';

export default function App() {
    const [renderizacao, setRenderizacao] = useState(false)
    Font.loadAsync({
      'Inter': InterRegular, 
      'Syne': SyneBold,
    }).then(()=>{
      setRenderizacao(true)
    })

  if (!renderizacao){
    return (
      <AppLoading/>
    ) 
  }

  return (
  <NavigationContainer>
    <Routes/>
  </NavigationContainer>
  );
}

