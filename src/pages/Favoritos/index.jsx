import { Text, View, StyleSheet, Image } from "react-native";

export default function MinhasPlantas() {
    return (
        <View style={styles.container}>
            <View style={styles.botaoVoltar}>
                <Text style={styles.voltar}>Voltar</Text>
            </View>
            <View style={styles.tituloCore}>
                <Image style={styles.iconCore} source={require('../../../assets/images/core-favpage.png')}/>
                <Text style={styles.textoTitulo}>
                    Minhas Plantas
                </Text>
            </View>
            <View style={styles.principal}>
                <View style={styles.planta}>
                    <View style={[styles.figura, {backgroundColor: '#479F26'}]}>
                        <View style={styles.caixaFigura}>
                            <Image style={styles.imgPlanta} source={require('../../../assets/images/abobora.png')}/>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.textos}>
                            <Text numberOfLines={1} style={styles.nomePlanta}>Abóbora</Text>
                            <Text numberOfLines={1} style={styles.nomeCientifico}>Brassica oleracea var. italica</Text>
                        </View>
                        <Image style={styles.iconCorePreenchido} source={require('../../../assets/images/core-preenchido.png')}/>
                    </View>
                </View>
                <View style={styles.planta}>
                    <View style={[styles.figura, {backgroundColor: '#01261B'}]}>
                        <View style={styles.caixaFigura}>
                            <Image style={styles.imgPlanta} source={require('../../../assets/images/abacate.png')}/>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.textos}>
                            <Text numberOfLines={1} style={styles.nomePlanta}>Batata-doce</Text>
                            <Text numberOfLines={1} style={styles.nomeCientifico}>Ipomoea batatas</Text>
                        </View>
                        <Image style={styles.iconCorePreenchido} source={require('../../../assets/images/core-preenchido.png')}/>
                    </View>
                </View>
                <View style={styles.planta}>
                    <View style={[styles.figura, {backgroundColor: '#00C3D4'}]}>
                        <View style={styles.caixaFigura}>
                            <Image style={styles.imgPlanta} source={require('../../../assets/images/melancia.png')}/>
                        </View>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.textos}>
                            <Text numberOfLines={1} style={styles.nomePlanta}>Melancia</Text>
                            <Text numberOfLines={1} style={styles.nomeCientifico}>Citrullus lanatus</Text>
                        </View>
                        <Image style={styles.iconCorePreenchido} source={require('../../../assets/images/core-preenchido.png')}/>
                    </View>
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
        gap: 32,
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
    iconCore: {
        width: 18,
        height: 18,
        borderRadius: 8,
    },

    tituloCore: {
        display: 'flex',
        paddingHorizontal: 8,
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row',
    },

    principal: {
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
    },


    planta: {
        display: 'flex',
        width: 152,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
    },

    imgPlanta: {
        height: 160,
        width: 160,
    },

    caixaFigura: {
        display: 'flex',
        width: 152,
        height: 168,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //overflow: 'hidden',
    },

    figura: {
        display: 'flex',
        height: 152,
        justifyContent: 'center',
        borderTopLeftRadius: 56,
        borderBottomRightRadius: 56,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    infos: {
        display: 'flex',
        paddingHorizontal: 12,
        alignItems: 'center',
        gap: 6,
        flexDirection: 'row',
    },

    textos: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 0,
        flex: 1,
    },

    nomePlanta: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 'bold',
    },

    nomeCientifico: {
        overflow: 'hidden',
        color: '#7D7D7D',
        fontFamily: 'Inter',
        fontSize: 10,
        fontStyle: 'italic',
    },

    iconCorePreenchido: {
        height: 18,
        width: 18,
    },
});
            
