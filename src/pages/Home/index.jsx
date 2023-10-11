import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation()
  function gotoonboard() {
    navigation.navigate('Onboard')
  }
  useEffect(() => {
    setTimeout(() => {
      gotoonboard()
    }, 2000)
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.caixa}>

        <Image style={styles.logo} source={require('../../../assets/images/polegar.png')} />
        <Image style={styles.nome} source={require('../../../assets/images/nome.png')} />

      </View>
      <Image style={styles.nomefeudo} source={require('../../../assets/images/grupo.png')} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002419',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nome: {
    width: 171.6,
  },
  logo: {
    width: 70.6
  },
  caixa: {
    flexDirection: 'row',
    gap: 16,
  },
  nomefeudo: {
    width: 120,
    margin: 20.81,
  }
});
