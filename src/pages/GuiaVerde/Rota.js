import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RotaVerde from "./RotaVerde";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Teste from "./Teste";
import { Ionicons } from "@expo/vector-icons";

const Rota = () => {

  const BottomTab = createBottomTabNavigator();
  const BottomNavigator = () => (
    <BottomTab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#071a0e',
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: "bold",
        marginTop :-5,
        paddingBottom :9,

      },
      tabBarIconStyle :{
        paddingBottom :5,
        marginBottom :-10,
      },
      tabBarStyle :{
        height: 55,
        position: 'absolute' ,
      },
      icon: {
        margin: -5, 
      },
      tabBarItemStyle :{
        marginHorizontal :14,
      }
    }}
    >
      <BottomTab.Screen name="GuiaVerde" component={RotaVerde}
      options={{
        tabBarLabel: 'GuiaVerde',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
                  name="home"
                  color={color}
                  size={23}
                ></Ionicons>
        ),
      }} />
      <BottomTab.Screen name="Notificações" component={Teste}
      options={{
        tabBarLabel: 'Notificações',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
                  name="notifications"
                  color={color}
                  size={23}
                ></Ionicons>
        ),
      }} />
      <BottomTab.Screen name="Mao" component={Teste} 
      options={{
        tabBarLabel: 'Mao na terra',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
                  name="leaf"
                  color={color}
                  size={23}
                ></Ionicons>
        ),
      }}/>
    </BottomTab.Navigator>
  );
  return (
       <BottomNavigator></BottomNavigator>
  );
};

export default Rota;
const styles = StyleSheet.create({
  bar: {
    paddingBottom :10,
  },
});