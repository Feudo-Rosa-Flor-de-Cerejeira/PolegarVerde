import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

export default function MaoNaTerra({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.saudacao}>
                <Image style={styles.imagemUsuario} source={require('../../../assets/images/fotoPerfil.png')} />
                <View style={styles.divTexto}>
                    <Text style={styles.bomCultivo}>
                        Bom cultivo,
                    </Text>
                    <Text style={styles.nomeDeUsuario}>
                        José
                    </Text>
                </View>
            </View>
            <View style={styles.minhasCondicoes}>
                <View style={styles.tituloEditar}>
                    <Text style={styles.textoTitulo}>
                        Minhas condições
                    </Text>
                    <Image source={require('../../../assets/images/edit-icon.png')}/>
                </View>
                <View style={styles.caixinhas}>
                    <View style={styles.box}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/casa.png')}/>
                        </View>
                        <Text style={styles.detalhesCondicoes}>
                            Pouco espaço
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/terra.png')}/>
                        </View>
                        <Text style={styles.detalhesCondicoes}>
                            Solo Arenoso
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/brasil.png')}/>
                        </View>
                        <Text style={styles.detalhesCondicoes}>
                            Cerrado
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.figura}>
                            <Image style={styles.iconeCondicoes} source={require('../../../assets/images/pragas.png')}/>
                        </View>
                        <Text style={styles.detalhesCondicoes}>
                            Pode lidar com pragas
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.aproveiteFerramentas}>
                <Text style={[styles.textoTitulo, {flex: 0}]}>Aproveite as ferramentas</Text>
                <View style={styles.quadros}>
                    <View style={styles.quadrosPrincipal}>
                        <View style={styles.esquerda}>
                            <TouchableWithoutFeedback onPress={() => { alert('Clicou aqui!') }}>
                                <View style={[styles.boxEsquerda, { backgroundColor: '#2E1409' }]}>
                                    <View style={[styles.circulo, {backgroundColor: '#37180B'}]}></View>
                                    <Image style={styles.iconeBoxprincipal} source={require('../../../assets/images/plant.png')}/>
                                    <Text style={styles.textoBoxprincipal}>
                                        Minhas plantas
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onClick={() => navigation.navigate('editarCondicoes')}>
                                <View style={[styles.boxEsquerda, { backgroundColor: '#50A92E' }]}>
                                    <View style={[styles.circulo, {backgroundColor: '#5FB936'}]}></View>
                                    <Image style={styles.iconeBoxprincipal} source={require('../../../assets/images/form.png')}/>
                                    <Text style={styles.textoBoxprincipal}>
                                        Editar minhas condições
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.direita}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('ControleHorta')}>
                                <View style={[styles.boxDireita1, { backgroundColor: '#00C3D4' }]}>
                                    <View style={[styles.circulo, {backgroundColor: '#00CEDC'}]}></View>
                                    <Image style={styles.iconeBoxprincipal} source={require('../../../assets/images/task.png')}/>
                                    <Text style={styles.textoBoxprincipal}>
                                        Controle da horta
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => { alert('Clicou aqui!') }}>
                                <View style={[styles.boxDireita2, { backgroundColor: '#CC3668' }]}>
                                    <View style={[styles.circulo, {backgroundColor: '#D6417D'}]}></View>
                                    <Image style={styles.iconeBoxprincipal} source={require('../../../assets/images/heart.png')}/>
                                    <Text style={styles.textoBoxprincipal}>
                                        Favoritos
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        marginLeft: 16,
        marginRight: 16,
        paddingBottom: 16,
        gap: 24,
        flex: 1,
    },
    saudacao: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 40,
        gap: 16,
        alignItems: 'center',
    },

    imagemUsuario: {
        width: 64,
        height: 64,
        borderRadius: 64,
    },
    
    bomCultivo: {
        color: '#7d7d7d',
        fontFamily: 'Inter',
        fontSize: 12,
    },

    nomeDeUsuario: {
        color: '#1e1e1e',
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
    },

    divTexto: {
        display: 'flex',
        flexDirection: 'column',
        gap: -4,
    },

    minhasCondicoes: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 24,
    },

    tituloEditar: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
    },

    textoTitulo: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },

    caixinhas: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    box: {
        display: 'flex',
        flexDirection: 'column',
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
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

    detalhesCondicoes: {
        color: '#1e1e1e',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },

    aproveiteFerramentas: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        height: 400,
        flex: 1,
    },

    quadros: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        height: 328,
        alignSelf: 'stretch',
        flex: 1,
    },

    quadrosPrincipal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        flex: 1,
        
    },

    esquerda: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        flex: 1,
    },

    boxEsquerda: {
        display: 'flex',
        padding: 24,
        paddingBottom: 32,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        borderRadius: 16,
        flex: 1,
        overflow: 'hidden',

    },

    iconeBoxprincipal: {
        width: 32,
        height: 32,
    },

    textoBoxprincipal: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        color: '#F5F5F5',
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
    },


    direita: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        flex: 1,
    },

    boxDireita1: {
        display: 'flex',
        padding: 24,
        paddingBottom: 32,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        borderRadius: 16,
        flex: 3,
        overflow: 'hidden',
    },

    boxDireita2: {
        display: 'flex',
        padding: 24,
        paddingBottom: 32,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        borderRadius: 16,
        flex: 1,
        overflow: 'hidden',
    },

    circulo: {
        width: 160, 
        height: 160,
        position: 'absolute',
        left: -17,
        top: -21,
        alignSelf: 'flex-start', 
        overflow: 'hidden', 
        borderRadius: 200,
    },
});
