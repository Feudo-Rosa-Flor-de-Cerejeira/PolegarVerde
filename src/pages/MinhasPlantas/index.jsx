import { Text, View, StyleSheet, Image } from "react-native";

export default function MinhasPlantas() {
    return (
        <View style={styles.container}>
            <View style={styles.botaoVoltar}>
                <Text style={styles.voltar}>Voltar</Text>
            </View>
            <Text style={styles.textoTitulo}>
                Minhas Plantas
            </Text>
            <View style={styles.relatorio}>
                <View style={[styles.categoria, {backgroundColor: '#01261B'}]}>
                    <Text style={styles.quantidade}>
                        23
                    </Text>
                    <Text style={styles.nomeCategoria}>
                        Legumes
                    </Text>
                </View>
                <View style={[styles.categoria, {backgroundColor: '#50A92E'}]}>
                    <Text style={styles.quantidade}>
                        2
                    </Text>
                    <Text style={styles.nomeCategoria}>
                        Verduras
                    </Text>
                </View>
                <View style={[styles.categoria, {backgroundColor: '#00C3D4'}]}>
                    <Text style={styles.quantidade}>
                        12
                    </Text>
                    <Text style={styles.nomeCategoria}>
                        Frutas
                    </Text>
                </View>
            </View>
            <View style={styles.minhasPlantas}>
                <View style={styles.planta}>
                    <View style={styles.textoEimagem}>
                        <Image style={styles.imgPlanta} source={require('../../../assets/images/abacate.png')}/>
                        <View style={styles.textosPlanta}>
                            <Text style={styles.nomePlanta}>
                                Abacate
                            </Text>
                            <Text style={styles.nomeCientifico}>
                                Persea americana
                            </Text>
                        </View>
                    </View>
                    <Image style={styles.trash} source={require('../../../assets/images/lixo.png')}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingVertical: 64,
        paddingHorizontal: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
    },

    voltar: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },


    textoTitulo: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 'bold',
    },

    planta: {
        display: 'flex',
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#fff',
        width: 400,
        maxWidth: '100%',
    },


    textoEimagem: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexDirection: 'row',
    },

    imgPlanta: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },

    textosPlanta: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    nomePlanta: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
    },

    nomeCientifico: {
        color: '#7D7D7D',
        fontFamily: 'Inter',
        fontSize: 12,
        fontStyle: 'italic',
    },

    trash: {
        width: 36,
        height: 36,
    },

 
    relatorio: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 16,
    },

    categoria: {
        display: 'flex',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
    },

    quantidade: {
        color: '#F5F5F5',
        fontFamily: 'Inter',
        fontSize: 32,
        fontWeight: 'bold',
    },

    nomeCategoria: {
        color: '#F5F5F5',
        fontFamily: 'Inter',
        fontSize: 12,
    },

});
            
