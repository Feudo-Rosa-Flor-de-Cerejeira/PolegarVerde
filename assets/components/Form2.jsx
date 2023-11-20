import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

export default function Form() {
    const [Email, setEmail] = React.useState('');
    const [Senha, setSenha] = React.useState('');
    const [Confirma, setConfirma]= React.useState('');
    return(
    <View style={styles.container}>
        <View style={styles.form1}> 
        <Text style= {styles.texto1}>
          Email
        </Text>
        <TextInput
          style={styles.input1}
          onChangeText={setEmail}
          value={Email}
          placeholder='ex.: suasplantas@polegarverde.com.br'
          />
       </View>
      <View style={styles.form2}>
        <Text style= {styles.texto2}>
          Criar Senha
        </Text>
        <TextInput
          style={styles.input2}
          onChangeText={setSenha}
          value={Senha}
          />
        </View>
    <View style={styles.form3}>
        <Text style= {styles.texto3}>
          Confirmar Senha
        </Text>
        <TextInput
          style={styles.input3}
          onChangeText={setConfirma}
          value={Confirma}
          />
    </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 40,
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
      form3:{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      },
      texto1: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
    
      },
      input1: {
        fontSize: 10,
        padding: 15,
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 42,
        width: 312,
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
        padding: 15,
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 42,
        width: 312,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        borderColor: '#C4C4C4',
      },
      texto3: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
      },
      input3: {
        fontSize: 10,
        padding: 15,
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 42,
        width: 312,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        borderColor: '#C4C4C4',
      },
    
})