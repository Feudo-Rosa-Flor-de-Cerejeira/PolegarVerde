import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

export default function Notificacoes() {
    return (
        <View style={styles.container}>
            <ScrollView style={[styles.scroll, {width: '100%'}]} showsVerticalScrollIndicator={false}>
            <View style={styles.principal}>
                <Text style={styles.titulo}>Notificações</Text>
                <View style={styles.blocoNotif}>
                    <View style={styles.dia}>
                        <Text style={styles.diaPequeno}>
                            Hoje
                        </Text>
                        <View style={styles.grupoNotif}>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#479F26',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#479F26',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-hora.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Está na hora de regar suas cenouras!</Text>
                                        <Text style={styles.tempoTexto}>8 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#00C3D4',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#00C3D4',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-artigo.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#CC3668',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#CC3668',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-flor.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dia}>
                        <Text style={styles.diaPequeno}>
                            Ontem
                        </Text>
                        <View style={styles.grupoNotif}>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#479F26',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#479F26',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-hora.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Está na hora de regar suas cenouras!</Text>
                                        <Text style={styles.tempoTexto}>8 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#00C3D4',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#00C3D4',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-artigo.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#CC3668',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#CC3668',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-flor.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dia}>
                        <Text style={styles.diaPequeno}>
                            Esta semana
                        </Text>
                        <View style={styles.grupoNotif}>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#479F26',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#479F26',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-hora.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Está na hora de regar suas cenouras!</Text>
                                        <Text style={styles.tempoTexto}>8 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#00C3D4',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#00C3D4',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-artigo.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifEFaixa}>
                                <View style={[styles.faixa, {backgroundColor: '#CC3668',}]}>
                                </View>
                                <View style={styles.iconeETexto}>
                                    <View style={[styles.icone, {backgroundColor: '#CC3668',}]}>
                                        <Image styles={styles.iconeNotif} source={require('../../../assets/images/icone-flor.png')}/>
                                    </View>
                                    <View style={styles.notifTextos}>
                                        <Text style={styles.notificacao}>Confira o artigo “Você sabia que morango não é fruta?”</Text>
                                        <Text style={styles.tempoTexto}>10 min atrás</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            <View style={styles.navBar}>
                <Text>navbaraq</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        backgroundColor: '#f5f5f5',
        flex: 1,
        paddingTop: 24,
    },
    
    principal: {
        display: 'flex',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ebebeb',
        gap: 24,
        flex: 1,


    },

    titulo: {
        color: '#1e1e1e',
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    blocoNotif: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,

    },

    dia: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,

    },

    diaPequeno: {
        color: '#7d7d7d',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '700',

    },

    grupoNotif: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,

    },

    notifEFaixa: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        borderRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',

    },
    
    faixa: {
        display: 'flex',
        width: 8,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },

    iconeETexto: {
        display: 'flex',
        padding: 12,
        alignItems: 'center',
        gap: 12,
        flexDirection: 'row',
        flex: 1,

    },

    icone: {
        display: 'flex',
        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 40,
        padding: 10,
    },


    iconeNotif: {
        width: '100%',
        height: '100%',
    },

    notifTextos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0,
        flex: 1,
    },

    notificacao: {
        color: '#1e1e1e',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
    },

    tempoTexto: {
        color: '#7D7D7D',
        fontFamily: 'Inter',
        fontSize: 10,
    },

    navBar: {
        height: 40,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#C4C4C4',
    },

});
