import { View, Text,StyleSheet,StatusBar,Platform } from 'react-native'
import React from 'react'

const Teste = ({route}) => {
  const {Nome} = route.params
  return (
    <View style={styles.container}>
      <Text>{Nome}</Text>
      <Text>Teste</Text>
    </View>
  )
}

export default Teste

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: 'white',
      overflow : 'visible',
    },
  
  });