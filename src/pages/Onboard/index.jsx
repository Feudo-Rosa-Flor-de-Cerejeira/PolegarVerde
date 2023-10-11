import { Text, View, StyleSheet } from "react-native";

export default function Onboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.textao}>Unboarding screen</Text>
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
