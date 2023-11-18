import { Text, View, StyleSheet, Image } from "react-native";
import Button from '../../../assets/components/Button.jsx';

export default function Login2({ navigation }) {
    return (
        <View style={styles.containerprincipal}>
            <View style={styles.login}>
                <Image style={styles.x} source={require('../../../assets/images/swap.png')}/>
                <Text style={styles.textologin}>Fazer login</Text>
            </View>
            <View style={styles.detalheslogin}>
                <Text style={styles.email}>Email</Text>
                <Button onPress={() => navigation.navigate('GuiaVerde')} style={styles.botaologin}>
                    Login
                </Button>
            </View>
        </View>
    )
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