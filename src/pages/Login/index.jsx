import { Text, View, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../../../assets/components/Button.jsx';

export default function Login({ navigation }){

    return ( 
        <View style={styles.container}>

            <View style={styles.gradepolegares}>
            <Image style={styles.polegares} source={require('../../../assets/images/polegares.png')}/>
            </View>
            <View style={styles.caixa}>
                <Text style={styles.tituloprincipal} >
                    Bem vindo(a) ao
                </Text>
                <Text style={styles.textao}>
                    polegar verde
                </Text>
            </View>
            <View style={styles.caixadosbotao}>
                <Button style={styles.botaoLogin1} onPress={() => navigation.navigate('Login2')} >
                    Fazer Login
                </Button>
                <Button style={styles.botaoLogin2} onPress={() => navigation.navigate('Registro')}>
                    Criar Conta
                </Button> 
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
        marginTop: 192,
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
        borderRadius: 8
    },
    botaoLogin2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        color: "#467B13",
        borderColor: '#467B13',
        width: 312,
        height: 42, 
        borderRadius: 8, 
        borderWidth: 1, 
    },
    polegares: {
        flexShrink: 0,
        width: 408,
        height: 140,
        marginLeft: -240,
        marginRight: -240,
    },
    gradepolegares: {
        alignItems: 'center',
    justifyContent: 'center',
    }
})

