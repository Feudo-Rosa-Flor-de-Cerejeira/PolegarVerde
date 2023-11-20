import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import ExitButton from '../../../assets/components/ExitButton.jsx';
import Button2 from '../../../assets/components/Button2.jsx';

export default function Login2({navigation}) {
    const [Email, setEmail] = React.useState('');
    const [Senha, setSenha] = React.useState('');
    return (
    <View style={styles.containerPrincipal}>
            <View style={styles.boxtexto}>
                <ExitButton onPress={() => navigation.navigate('Login')}/> 
                <Text style={styles.texto}>
                    Fazer Login
                </Text>
            </View>
            <View style={styles.containerSecundario}>
                <View style={styles.form1}>
                    <Text style= {styles.texto1}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input1}
                        onChangeText={setEmail}
                        value={Email}
                        placeholder='ex.: suasplantas@polegarverde.com.br'/>
                </View>
                <View styles={styles.form2}>
                    <Text style= {styles.texto2}>
                        Criar Senha
                    </Text>
                    <TextInput
                        style={styles.input2}
                        onChangeText={setSenha}
                        value={Senha}/>
                </View>
                <View style={styles.botao}>
                <Button2 labelButton='Login'/>
                </View>
                <View style={styles.textinho}>
                    <Text style={styles.normalText}>
                        Não tem conta?
                    </Text>
                    <TouchableOpacity >
                    <Text style={styles.boldText}>
                        Cadastre-se
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    );
};
const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        gap: 40,
    },
    boxtexto:{
        marginTop: 51,
        marginLeft: 24,
        gap: 24,
    },
    texto: {
        marginTop: 120,
        color: '#4D8B12',
        fontFamily: 'Syne',
        fontSize: 24,
    },
    containerSecundario: {
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
    texto1: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
    
      },
    input1: {
        textAlign: 'center',
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 42,
        width: 312,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        borderColor: '#4D8B12',
      },
      form2: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      },
      input2: {
        textAlign: 'center',
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 42,
        width: 312,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        borderColor: '#4D8B12',
    
      },
      texto2: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
      },
      textinho: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
      },
      boldText: {
        fontWeight: 'bold',

      },
      normalText: {
        color: '#1E1E1E',
        marginRight: 5,
    
      },

})


