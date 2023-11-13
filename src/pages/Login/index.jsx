import { Text, View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../../../assets/components/Button.jsx';

export default function Login({ navigation }){

    return ( 
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.caixa}>
                <Text style={styles.tituloprincipal} >
                    Bem vindo(a) ao
                </Text>
                <Text style={styles.textao}>
                    Polegar Verde
                </Text>
            </View>
            <View style={styles.caixadosbotao}>
                <View style={styles.botaoLogin1}>
                    <Button labelButton="Fazer Login" paralelepipedo={() => navigation.navigate('Login2')} cor='#ffffff'/>
                </View>
                <View style={styles.botaoLogin2}>
                    <Button labelButton="Criar Conta" style={styles.botaoLogin2}/>  
                </View>    
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        gap: 64,
    }, 
    caixa:{
        marginTop: 312,
        marginLeft: 24,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
    },
    caixadosbotao:{

        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 24,
        marginRight: 24,
        gap: 16,
    },

    tituloprincipal:{
        fontFamily: 'Inter',
        color: '#1E1E1E',
        fontSize: 16,
    },
    textao: {
        fontFamily: 'Syne',
        color: '#4D8B12',
        fontSize: 40,
    },
    botaoLogin1: {
        backgroundColor:'#012E20',
        height: 42,
        width: 312,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    botaoLogin2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderColor: '#467B13',
        width: 312,
        height: 42, 
        borderRadius: 8, 
        borderWidth: 1, 
    }
})

