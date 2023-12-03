import { TextInput, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ExitButton from '../../../assets/components/ExitButton.jsx';
import Button2 from '../../../assets/components/Button2.jsx';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../../../Services/firebaseConfig.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Registro({navigation}) {    
    const [PrimeiroNome, setPrimeiroNome] = useState('');
    const [UltimoNome, setUltimoNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Confirma, setConfirma]= useState('');
    
    const handleRegistrar = () => {
        createUserWithEmailAndPassword(auth, Email, Senha)
        .then((userCredential) => {
            const user = userCredential.user;
    
            // Configurando o displayName
            const nomeCompleto = PrimeiroNome + ' ' + UltimoNome;
            updateProfile(user, { displayName: nomeCompleto }).then(() => {
              console.log('DisplayName configurado com sucesso:', nomeCompleto);
            });
            AsyncStorage.setItem("userId", user.uid);

            console.log('Novo usuário cadastrado:', user);
            // Você pode redirecionar para a próxima tela ou realizar outras ações após o login bem-sucedido
            navigation.navigate('Perguntas');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Erro ao cadastrar novo usuário:', errorMessage);
          });
      };
    function Confirmar(){
        if (Senha === Confirma){
          return handleRegistrar()
        }
        else{
          Alert.alert(
            "As senhas não coincidem!",
            "Reescreva a senha"
          )
        }
        
      };
    return ( 
        <View style={styles.containerPrincipal}>
            <View style={styles.boxtexto}>
                <ExitButton onPress={() => navigation.navigate('Login')}/> 
                <Text style={styles.texto}>
                    Cadastre-se
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.form1}> 
                    <Text style= {styles.texto1}>
                        Primeiro nome
                    </Text>
                     <TextInput
                        style={styles.input1}
                        onChangeText={setPrimeiroNome}
                        value={PrimeiroNome}
                        placeholder='ex.: Lucas'/>
                    </View>
                <View style={styles.form2}>
                    <Text style= {styles.texto2}>
                        Último nome
                    </Text>
                    <TextInput
                        style={styles.input2}
                        onChangeText={setUltimoNome}
                        value={UltimoNome}
                        placeholder='ex.: Guimarães'/>
                </View>
            </View>
                <View style={styles.container2}>
                    <View style={styles.form3}> 
                        <Text style= {styles.texto3}>
                            Email
                        </Text>
                        <TextInput
                            style={styles.input3}
                            onChangeText={setEmail}
                            value={Email}
                             placeholder='ex.: suasplantas@polegarverde.com.br'/>
                    </View>
                <View style={styles.form4}>
                    <Text style= {styles.texto4}>
                        Criar Senha
                    </Text>
                     <TextInput
                        style={styles.input4}
                        onChangeText={setSenha}
                        value={Senha}/>
                    </View>
                <View style={styles.form5}>
                    <Text style= {styles.texto5}>
                        Confirmar Senha
                    </Text>
                    <TextInput
                        style={styles.input5}
                        onChangeText={setConfirma}
                        value={Confirma}/>
            </View>
            </View>
                <View style={styles.botao}>
                    <Button2 onPress={Confirmar} labelButton='Criar Conta'/>
                </View>
                <View style={styles.caixadoida}>
                  <Text style={styles.normalText}>
                    Já tem uma conta?
                  </Text>
                  <TouchableOpacity onPress={() => 
                    console.log('deu certo')} >
                    <Text style={styles.boldText}>
                        Faça login
                    </Text>
                    </TouchableOpacity >

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
        color: '#4D8B12',
        fontFamily: 'Syne',
        fontSize: 24,
    },
    botao: {
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
    },
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
      },
      container2: {
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 40,
      },
      form3: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      },
      form4: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      },
      form5:{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
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
      texto4: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
      },
      input4: {
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
      texto5: {
        color: '1E1E1E',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 'bold',
      },
      input5: {
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
      caixadoida: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
      },
      boldText: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        marginLeft: -85,
      },
      normalText: {
        fontFamily: 'Inter',
        color: '#1E1E1E',
    
      },
})
