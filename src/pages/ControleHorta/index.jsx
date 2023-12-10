import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { CheckBox } from 'react-native-elements';

export default function ControleHorta() {

    return (
        <View style={styles.container}>
            <View style={styles.containerSuperior}>
                <View style={styles.setaDia}>
                    <Image style={styles.seta} source={require('../../../assets/images/seta.png')}/>
                    <Text style={styles.dia}>
                        Hoje
                    </Text>
                </View>
                <View style={styles.containerDias}>
                    <View style={[styles.boxDias, { backgroundColor: '#CC3668' }]}>
                        <Text style={styles.diaSemana}>
                            qui
                        </Text>
                        <Text style={styles.diaNumero}>
                            16
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            sex
                        </Text>
                        <Text style={styles.diaNumero}>
                            17
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            sáb
                        </Text>
                        <Text style={styles.diaNumero}>
                            18
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            dom
                        </Text>
                        <Text style={styles.diaNumero}>
                            19
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            seg
                        </Text>
                        <Text style={styles.diaNumero}>
                            20
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            ter
                        </Text>
                        <Text style={styles.diaNumero}>
                            21
                        </Text>
                    </View>
                    <View style={styles.boxDias}>
                        <Text style={styles.diaSemana}>
                            qua
                        </Text>
                        <Text style={styles.diaNumero}>
                            22
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerInferior}>
                <View style={styles.diaAtual}>
                    <Image style={styles.setaIrVoltar} source={require('../../../assets/images/setaEsquerdaCinza.png')}/>
                    <Text style={styles.diaDetalhado}>
                        Quinta-feira, 16 de novembro
                    </Text>
                    <Image style={styles.setaIrVoltar} source={require('../../../assets/images/setaDireitaCinza.png')}/>
                </View>
                <View style={styles.lembretes}>
                    <View style={styles.lembreteModelo}>
                        <View style={styles.checkCaixa}>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.tarefa}>
                                Adubar alface
                            </Text>
                            <Text style={styles.detalhesTarefa}>
                                Após 18h • Manter à sombra
                            </Text>
                        </View>
                    </View>
                    <View style={styles.lembreteModelo}>
                        <View style={styles.checkCaixa}></View>
                        <View style={styles.textos}>
                            <Text style={styles.tarefa}>
                                Regar beterrabas
                            </Text>
                            <Text style={styles.detalhesTarefa}>
                                Após 18h • Manter à sombra
                            </Text>
                        </View>
                    </View>
                    <View style={styles.lembreteModelo}>
                        <View style={styles.checkCaixa}></View>
                        <View style={styles.textos}>
                            <Text style={styles.tarefa}>
                                Regar tomates
                            </Text>
                            <Text style={styles.detalhesTarefa}>
                                Após 18h • Manter à sombra
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerSuperior: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 1,
        padding: 16,
        gap: 16,
        backgroundColor: '#012E20',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    setaDia: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        flex: 1,
        paddingTop: 40,
    },

    seta: {
        height: 20,
        width: 10,
    },

    dia: {
        color: '#F5F5F5',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
    },

    containerDias: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        flexDirection: 'row',
    },

    boxDias: {
        display: 'flex',
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#024E36',
        flex: 1,
    },

    diaSemana: {
        color: '#EDEDED',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    diaNumero: {
        color: '#EDEDED',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 18,
    },

    containerInferior: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 4,
        gap: 16,
        padding: 16,
    },

    diaDetalhado: {
        color: '#6D6D6D',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 12,
        flex: 1,
    },

    setaIrVoltar: {
        display: 'flex',
        height: 16,
        width: 16,
    },

    diaAtual: {
        display: 'flex',
        paddingHorizontal: 48,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    lembretes: {
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#F5F5F5',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: '#DFDFDF',
        borderRightColor: '#DFDFDF',
    },

    lembreteModelo: {
        display: 'flex',
        padding: 16,
        alignItems: 'center',
        gap: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#DFDFDF',
        borderBottomColor: '#DFDFDF',
        flexDirection: 'row',
    },

    checkCaixa: {
        display: 'flex',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#717171',
        borderRadius: 4,
        flexDirection: 'row',
        marginBottom: 20,
    },

    checkbox: {
        alignSelf: 'center',
    },

    textos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        flex: 1,
        
    },

    tarefa: {
        color: '#1E1E1E',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 'bold',
    },

    detalhesTarefa: {
        color: '#787877',
        fontFamily: 'Inter',
        fontSize: 10,
    },
});
