import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet } from "react-native";

export default function Login2() {
    return (
        <View style={styles.container}>
            <Text style={styles.textao}>Login2</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textao: {
        color: '#fff',
        backgroundColor: '#000',

    },


});