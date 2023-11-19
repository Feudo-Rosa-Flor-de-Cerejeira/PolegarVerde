import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import Button from '../../../assets/components/Button.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importe a função signInWithEmailAndPassword do módulo de autenticação do Firebase.
import { auth } from '../../../Services/firebaseConfig.js'; // Importe o objeto 'auth' do seu arquivo 'firebaseConfig.js'.

export default function Registrar({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistrar = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Você pode redirecionar para a próxima tela ou realizar outras ações após o login bem-sucedido
        navigation.navigate('GuiaVerde');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Erro ao cadastrar novo usuário:', errorMessage);
      });
  };

  return (
    <View style={styles.containerprincipal}>
      <View style={styles.login}>
        <Image style={styles.x} source={require('../../../assets/images/swap.png')} />
        <Text style={styles.textologin}>Fazer Cadastro</Text>
      </View>
      <View style={styles.detalheslogin}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.botaoemail}
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.email}>Senha</Text>
        <TextInput
          style={styles.botaoemail}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button onPress={handleRegistrar} style={styles.botaologin}>
          Cadastro
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    containerprincipal: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        gap: 32,
    },
    login: {
        marginTop: 51,
        display: "flex", 
        padding: 24, 
        width: 360,
        alignItems: "flex-start", 
        flexDirection: "column",
        gap: 24,
    },
    textologin: {
        color: '#4D8B12',
        fontFamily: 'Syne',
        fontSize: 24,
    },
    x: {
        width: 22,
        height: 22,
    },
    detalheslogin:{
        //marginTop: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 32,
        alignContent: "stretch", 
        marginLeft: 24,
        marginRight: 24,
    }, 
    email:{
        color: "#1E1E1E",
        fontFamily: "Inter",
        fontSize: 11,
    },
    botaoemail:{
        background: "#F5F5F5", 
        borderColor: '#C4C4C4',
        flexDirection: "column",
        alignSelf: "stretch",
        gap: 16,
    },
    botaologin: {
        backgroundColor: "#012E20",
        alignSelf: "stretch",
        height: 36,
    }
});