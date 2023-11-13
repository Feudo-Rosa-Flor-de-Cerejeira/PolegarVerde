import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import SyneRegular from './assets/fonts/Syne-Regular.ttf';

export default function App() {
    const [renderizacao, setRenderizacao] = useState(false)
    Font.loadAsync({
      'Inter': InterRegular, 
      'Syne': SyneRegular,
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

