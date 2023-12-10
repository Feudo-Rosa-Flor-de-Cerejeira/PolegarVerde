import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Onboard from '../pages/Onboard';
import Login from '../pages/Login';
import Login2 from '../pages/Login2';
import Registro from '../pages/Registro';
import Rota from '../pages/GuiaVerde/Rota';
import Perguntas from '../pages/Perguntas';
import TelaNordeste from '../pages/TelaNordeste/index.jsx';
import TelaNorte from '../pages/TelaNorte/index.jsx';
import TelaCentroOeste from '../pages/TelaCentroOeste';
import TelaSudeste from '../pages/TelaSudeste';
import TelaSul from '../pages/TelaSul';
import Todos from '../pages/GuiaVerde/Todos.js';
import GuiaVerde from '../pages/GuiaVerde/GuiaVerde.js';
import Teste from '../pages/GuiaVerde/Teste.js';
import TelaModelo from '../pages/TelaModelo';
import { NavigationContainer } from '@react-navigation/native';
import CustomImageCarousal from '../../assets/components/CustomImageCarousalSquare';
import Perguntas2 from '../pages/Perguntas2';
import Perguntas3 from '../pages/Perguntas3';
import Perguntas4 from '../pages/Perguntas4';
import MaoNaTerra from '../pages/MaoNaTerra';
import editarCondicoes from '../pages/editarCondicoes';
import ControleHorta from '../pages/ControleHorta';
import Notificacoes from '../pages/Notificacoes';
import MinhasRecomendacoes from '../pages/MinhasRecomendacoes';
import MinhasRecomendacoes2 from '../pages/MinhasRecomendacoes2';
import MinhasPlantas from '../pages/MinhasPlantas';
import Favoritos from '../pages/Favoritos';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName='Home'>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Rota" component={Rota} />
        <Stack.Screen name="Perguntas" component={Perguntas} />
        <Stack.Screen name="Perguntas2" component={Perguntas2} />
        <Stack.Screen name="Perguntas3" component={Perguntas3} />
        <Stack.Screen name="Perguntas4" component={Perguntas4} />
        <Stack.Screen name="TelaNorte" component={TelaNorte} />
        <Stack.Screen name="TelaNordeste" component={TelaNordeste} />
        <Stack.Screen name="TelaCentroOeste" component={TelaCentroOeste} />
        <Stack.Screen name="TelaSudeste" component={TelaSudeste} />
        <Stack.Screen name="TelaSul" component={TelaSul} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="GuiaVerde" component={GuiaVerde} />
        <Stack.Screen name="TelaModelo" component={TelaModelo} />
        <Stack.Screen name="Teste" component={Teste} />
        <Stack.Screen name="Carousal" component={CustomImageCarousal} />
        <Stack.Screen name="MaoNaTerra" component={MaoNaTerra} />
        <Stack.Screen name="editarCondicoes" component={editarCondicoes} />
        <Stack.Screen name="ControleHorta" component={ControleHorta} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="MinhasRecomendacoes" component={MinhasRecomendacoes} />
        <Stack.Screen name="MinhasRecomendacoes2" component={MinhasRecomendacoes2} />
        <Stack.Screen name="MinhasPlantas" component={MinhasPlantas} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
      </Stack.Navigator>
      
  );
}