import { Text, View, StyleSheet } from "react-native";

export default function GuiaVerde() {
    return (
        <View style={styles.container}>
            <Text style={styles.textao}>GuiaVerde</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textao: {
        color: '#fff',
        backgroundColor: '#000',

    },


});
