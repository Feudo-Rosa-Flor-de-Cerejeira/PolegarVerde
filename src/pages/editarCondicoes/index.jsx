import { Text, View, StyleSheet, Image } from "react-native";

export default function editarCondicoes() {
    return (    
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.voltarEtitulo}>
                    <Text style={styles.voltar}>
                        Voltar
                    </Text>
                    <Text style={styles.textoTitulo}>
                        Editar minhas condições
                    </Text>
                 </View>
                 <View style={styles.detalhes}>
                    <View style={styles.boxDetalhes}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/casa.png')}/>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textoCategoria}>
                                Área disponível
                            </Text>
                            <Text style={styles.textoCondicao}>
                                Pouco espaço
                            </Text>
                        </View>
                        <View style={styles.botaoEditar}>
                            <Image style={styles.iconeEditar} source={require('../../../assets/images/edit-icon.png')}/>
                        </View>
                    </View>
                    <View style={styles.boxDetalhes}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/terra.png')}/>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textoCategoria}>
                                Tipo de solo
                            </Text>
                            <Text style={styles.textoCondicao}>
                                Solo arenoso
                            </Text>
                        </View>
                        <View style={styles.botaoEditar}>
                            <Image style={styles.iconeEditar} source={require('../../../assets/images/edit-icon.png')}/>
                        </View>
                    </View>
                    <View style={styles.boxDetalhes}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/brasil.png')}/>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textoCategoria}>
                                Região
                            </Text>
                            <Text style={styles.textoCondicao}>
                                Cerrado
                            </Text>
                        </View>
                        <View style={styles.botaoEditar}>
                            <Image style={styles.iconeEditar} source={require('../../../assets/images/edit-icon.png')}/>
                        </View>
                    </View>
                    <View style={styles.boxDetalhes}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/pragas.png')}/>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textoCategoria}>
                                Controle de pragas
                            </Text>
                            <Text style={styles.textoCondicao}>
                                Pode lidar com pragas
                            </Text>
                        </View>
                        <View style={styles.botaoEditar}>
                            <Image style={styles.iconeEditar} source={require('../../../assets/images/edit-icon.png')}/>
                        </View>
                    </View>
                 </View>
            </View>
            <View style={styles.botaoSalvar}>
                <Text style={styles.textoSalvar}>Salvar</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 64,
        paddingBottom: 40,
        paddingHorizontal: 16,
        flexDirection: 'column',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },

    voltarEtitulo: {
        gap: 32,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
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

    detalhes: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,

    },

    boxDetalhes: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderTopLeftRadius: 64,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 64,
        borderBottomRightRadius: 16,
        backgroundColor: '#FFFFFF',
        height: 64,
        flexDirection: 'row',
    },

    figura: {
        display: 'flex',
        width: 64,
        height: 64,
        padding: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 64,
        backgroundColor: '#C7E9A7',
    },

    iconeCondicoes: {
        width: 48,
        height: 48,
    },

    textos: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },

    textoCategoria: {
        alignSelf: 'stretch',
        color: '#7D7D7D',
        fontFamily: 'Inter',
        fontSize: 12,
        fontStyle: 'italic',
    },

    textoCondicao: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
    },

    botaoEditar: {
        display: 'flex',
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    iconeEditar: {
        width: 18,
        height: 18,
    },

    botaoSalvar: {
        display: 'flex',
        maxWidth: 400,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#CC3668',
        flexDirection: 'row',
    },

    textoSalvar: {
        color: '#F5F5F5',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
});
