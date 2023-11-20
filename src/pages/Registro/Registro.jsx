import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Form from '../../../assets/components/Form.jsx';
import Form2 from '../../../assets/components/Form2.jsx';
import ExitButton from '../../../assets/components/ExitButton.jsx';
import Button2 from '../../../assets/components/Button2.jsx';
import TextoBold from '../../../assets/components/TextoBold.jsx';

export default function Registro({navigation}) {
    return ( 
        <View style={styles.containerPrincipal}>
            <View style={styles.boxtexto}>
                <ExitButton onPress={() => navigation.navigate('Login')}/> 
                <Text style={styles.texto}>
                    Cadastre-se
                </Text>
            </View>
            <Form/>
            <Form2/>
            <View style={styles.botao}>
                <Button2 labelButton='Criar Conta'/>
            </View>
            <View>
            <TextoBold/>
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
})
