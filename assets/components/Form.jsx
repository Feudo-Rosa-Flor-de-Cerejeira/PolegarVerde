import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

export default function Form() {
  const [PrimeiroNome, setPrimeiroNome] = React.useState('');
  const [UltimoNome, setUltimoNome] = React.useState('');

  return (
      <View style={styles.container}>
        <View style={styles.form1}> 
        <Text style= {styles.texto1}>
          Primeiro nome
        </Text>
        <TextInput
          style={styles.input1}
          onChangeText={setPrimeiroNome}
          value={PrimeiroNome}
          placeholder='ex.: Lucas'
          />
       </View>
      <View style={styles.form2}>
        <Text style= {styles.texto2}>
          Último nome
        </Text>
        <TextInput
          style={styles.input2}
          onChangeText={setUltimoNome}
          value={UltimoNome}
          placeholder='ex.: Guimarães'
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
  },
  form1: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  form2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  texto1: {
    marginLeft: 24,
    color: '1E1E1E',
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 'bold',

  },
  input1: {
    fontSize: 10,
    padding: 12,
    marginLeft: 24,
    marginRight: 16,
    height: 39,
    width: 148,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderColor: '#C4C4C4',

  },
  texto2: {
    color: '1E1E1E',
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 'bold',
  },
  input2: {
    fontSize: 10,
    padding: 12,
    marginRight: 24,
    height: 39,
    width: 148,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderColor: '#C4C4C4',
  }
});

