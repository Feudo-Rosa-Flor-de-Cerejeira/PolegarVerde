import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GuiaVerde from "./GuiaVerde";
import Todos from "./Todos";

const TopStack = createMaterialTopTabNavigator();

const RotaVerde = () => {
  return (
    <TopStack.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        tabStyle: {
          textTransform: "none",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          width: 120,
          marginLeft: 40,
        },
      }}
      style={styles.top}
    >
      <TopStack.Screen name="Principal" component={GuiaVerde} />
      <TopStack.Screen name="Todos" component={Todos} />
    </TopStack.Navigator>
  );
};

export default RotaVerde;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  top: {
    paddingTop: 25,
  },
});
