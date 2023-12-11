import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';

export default function MinhasRecomendacoes() {
    const navigation = useNavigation()
    const [image, setImage] = useState(require('../../../assets/images/plus.png'));

    const changeImage = () => {
        setImage(require('../../../assets/images/check.png'));
        console.log(image);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={[styles.scroll, {width: '100%'}]} showsVerticalScrollIndicator={false}>
            <View style={styles.scrollPrincipal}>
                <View style={styles.capa}>
                    <Image style={styles.imagemCapa} source={require('../../../assets/images/presente.png')}/>
                </View>
                <View style={styles.principal}>
                    <View style={styles.textosApresentacao}>
                        <Text style={styles.titulo}>
                            Suas recomendações
                        </Text>
                        <Text style={styles.descricao}>
                            Confira as plantas mais apropriadas para suas condições, adicione-as à sua horta e receba orientações personalizadas.                        
                        </Text>
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
                            <Image style={styles.add} source={require('../../../assets/images/plus.png')}/>
                        </View>
                        <View style={styles.planta}>
                            <View style={styles.textoEimagem}>
                                <Image style={styles.imgPlanta} source={require('../../../assets/images/abobora.png')}/>
                                <View style={styles.textosPlanta}>
                                    <Text style={styles.nomePlanta}>
                                        Abóbora
                                    </Text>
                                    <Text style={styles.nomeCientifico}>
                                        Cucurbita
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={changeImage}>
                            <Image style={styles.add} source={image} onPress={changeImage}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Perguntas4')}>
                <View style={styles.botaoVoltar}>
                    <Image style={styles.seta} source={require('../../../assets/images/seta-esquerda.png')} />
                </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Rota')}>
                <View style={styles.botaoFinalizar}>
                    <Text style={styles.txtFinalizar}>
                        Finalizar
                    </Text>
                    <Image style={styles.seta} source={require('../../../assets/images/seta-direita.png')} />
                </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        flex: 1,
    },

    scrollPrincipal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },

    navBar: {
        display: 'flex',
        height: 64,
        paddingVertical: 10,
        paddingHorizontal: 32,
        gap: 16,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#C4C4C4',
        flexDirection: 'row',
    },

    capa: {
        display: 'flex',
        height: 212,
        paddingHorizontal: 24,
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        backgroundColor: '#59A0C9',
        overflow: 'hidden',
        width: 1200,
        maxWidth: '100%',
    },

    principal: {
        display: 'flex',
        paddingVertical: 32,
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 32,
        flex: 1,
    },

    imagemCapa: {
        width: 360,
        height: 360,
        position: 'absolute',
        top: -21,
    },

    textosApresentacao: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
    },

    titulo: {
        coloe: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 'bold',
    },

    descricao: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 12,
    },

    minhasPlantas: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
        flex: 1,
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

    add: {
        width: 36,
        height: 36,
    },

    botaoVoltar: {
        display: 'flex',
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7D7D7D',
    },

    botaoFinalizar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#CC3668',
    },

    txtFinalizar: {
        color: '#F5F5F5',
        fontSize: 14,
        fontWeight: 'bold',
    },

    seta: {
        width: 12,
    },

});
