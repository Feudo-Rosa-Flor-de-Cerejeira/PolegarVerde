import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button3 from '../../../assets/components/Button3.jsx';
import Button4 from '../../../assets/components/Button4.jsx';
import { addDoc, collection, getDocs, setDoc, docId, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perguntas2({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const ref = collection(db, 'respostas'); 
    const toggleCheckBox1 = () => {
      setChecked(true);
      setChecked2(false);
    };
  
    const toggleCheckBox2 = () => {
      setChecked(false);
      setChecked2(true);
    };
  
    const handleNextButtonPress = async () => {
      const userId = await AsyncStorage.getItem('userId');
      let resposta = '';
  
      if (isChecked) {
        resposta = 'Arenoso';
      } else if (isChecked2) {
        resposta = 'Argiloso';
      }
  
      if (resposta !== '') {
        try {
            // Atualiza o documento existente adicionando um novo campo
            await updateDoc(doc(ref,userId), { solo: resposta});
            console.log('Novo campo adicionado com sucesso no Firestore');
        } catch (error) {
          console.error('Erro ao salvar resposta do formulário 2:', error);
        }
      } else {
        console.error('Nenhuma resposta selecionada.');
      }
      navigation.navigate('Perguntas3');
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerdecima}>
                <Text style={styles.titulozao}>
                Pergunta 2 de 4
                </Text>
                <View style={styles.barrasalinhadas}>
                    <View style={styles.divbarra}>
                        <View style={styles.barra}/>
                    </View>
                    <View style={styles.divbarrinha}>
                        <View style={styles.barrinha}/>
                    </View>
                </View>
            </View>
            <View style={styles.containerdoscheckbox}>
            <View style={styles.divtexto}>
            <Text style={styles.text}>Qual tipo de solo você tem disponível?</Text>
            </View>
            <CheckBox
                title={<View>
                    <Text style={styles.tituloform}>Arenoso</Text>
                    <Text style={styles.subtituloform}>Terra solta como areia de praia</Text>
                    </View>}
                checked={isChecked}
                onPress={toggleCheckBox1}
                checkedIcon={
                    <View style={styles.checkedCircleContainer}>
                    <View style={styles.checkedOuterCircle}>
                    <View style={styles.checkedInnerCircle} />
                    </View>
                    </View>
                    }
                uncheckedIcon={<View style={styles.uncheckedCircle} />}
                containerStyle={[styles.checkboxContainer, isChecked && { backgroundColor: '#A2E6A1' }]}

            />
            <CheckBox
                title={<View>
                    <Text style={styles.tituloform}>Argiloso</Text>
                    <Text style={styles.subtituloform}>Solo pesado que endurece quando está seco</Text>
                    </View>}
                checked={isChecked2}
                onPress={toggleCheckBox2}
                checkedIcon={
                    <View style={styles.checkedCircleContainer}>
                    <View style={styles.checkedOuterCircle}>
                    <View style={styles.checkedInnerCircle} />
                    </View>
                    </View>
                    }
                uncheckedIcon={<View style={styles.uncheckedCircle} />}
                containerStyle={[styles.checkboxContainer, isChecked2 && { backgroundColor: '#A2E6A1' }]}

            />
            </View>
            <View style={styles.botao}>
                <View style={styles.caixabotao}>
                <Button4 onPress={() => navigation.navigate('Perguntas')}/>
                <Button3 labelButton={'Próximo'} onPress={handleNextButtonPress} /> 
                </View>
            </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    containerdecima:{
        marginTop: 80,
        gap: 24,

    },
    titulozao: {
        color: '#1E1E1E',
        marginLeft: 50,
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
  
    },
    barrasalinhadas:{
        display: 'flex',
        flexDirection: 'column',
        gap: -6.75,
    },
    divbarrinha:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    barrinha:{
        width: 156,
        height: 6.5,
        borderRadius: 8,
        backgroundColor: '#50A92E',
        marginLeft: -153,
    },
    divbarra: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    barra: {
        width: 312,
        height: 8,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
    },
    divtexto: {
        marginBottom: 20,
        width: 312,
        height: 71,
    },
    text: {
      fontSize: 20,
      fontFamily: 'Inter',
      fontWeight: 'bold',
    },
    containerdoscheckbox: {
        marginTop: 50,
        gap: 16,
        justifyContent: 'space-evenly', 
        alignItems: 'center',

    },
    checkboxContainer: {
        backgroundColor: '#ECECEC',
        borderWidth: 0,
        width: 312,
        height: 100,
        display: 'flex',
        borderRadius: 8,

      },
    checkedCircleContainer: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkedOuterCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#50A92E', 
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkedInnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#50A92E',
      },
      uncheckedCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#717171',
        borderWidth: 2,
      },
    tituloform: {
        marginLeft: 16,
        fontFamily: 'Inter',
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: 'bold',

    },
    subtituloform: {
        marginLeft: 16,
        fontFamily: 'Inter',
        color: '#1E1E1E',
        fontSize: 10,
        marginRight: 20,

    },
    botao: {
        display: 'flex',
        alignSelf: 'center',
        position: 'absolute', 
        bottom: 0,
        marginBottom: 50,
    },
    caixabotao: {
        display: 'flex',
        flexDirection: 'row',
        gap: 64,

    },
  })