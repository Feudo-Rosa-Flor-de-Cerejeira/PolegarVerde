import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button3 from '../../../assets/components/Button3.jsx';


export default function Perguntas({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
  
    const toggleCheckBox1 = () => {
        setChecked(true);
        setChecked2(false);
      };
    
      const toggleCheckBox2 = () => {
        setChecked(false);
        setChecked2(true);
      };
    return (
        <View style={styles.container}>
            <View style={styles.containerdecima}>
                <Text style={styles.titulozao}>
                Pergunta 1 de 4
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
            <Text style={styles.text}>Que tipo de ambiente você possui para o plantio?</Text>
            </View>
            <CheckBox
                title={<View>
                    <Text style={styles.tituloform}>Ambiente pequeno</Text>
                    <Text style={styles.subtituloform}>Plantio em vasos casas e apartamentos em locais com luz do sol</Text>
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
                    <Text style={styles.tituloform}>Terreno amplo</Text>
                    <Text style={styles.subtituloform}>Quintal ou terreno com mais de 3 metros quadrados</Text>
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
                <Button3 labelButton={'Próximo'} onPress={() => navigation.navigate('Perguntas2')}/>
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
        width: 78,
        height: 6.5,
        borderRadius: 8,
        backgroundColor: '#50A92E',
        marginLeft: -232,
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
      alignItems: 'center',
      alignContent: 'center',  
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
    }
  });
  