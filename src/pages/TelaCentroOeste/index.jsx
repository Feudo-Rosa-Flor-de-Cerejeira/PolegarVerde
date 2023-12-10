import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import BackButton from "../../../assets/components/BackButton.jsx";

export default function TelaCentroOeste({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.corcontainer}>
                <View style={styles.xis}>
                    <BackButton onPress={() => navigation.navigate("Rota")} />
                </View>
                <View style={styles.pequi}>
                    <Image source={require('../../../assets/images/pequi.png')}/>
                </View>
            </View>
            <View style={styles.textoapresentacao}>
                <Text style={styles.titulo}>Centro-oeste</Text>
                <Text style={styles.descricao}>
                A região Centro-Oeste do Brasil possui um clima tropical sazonal, com uma estação seca no inverno e uma estação chuvosa no verão. Possui solos férteis, especialmente no bioma do Cerrado, favorecendo a produção agrícola.
                </Text>
            </View>
            <View style={styles.principal}>
                <View style={styles.plantaprincipal}>
                    <View style={styles.imagemprincipal}>
                        <Image source={require('../../../assets/images/milho11.png')}/>
                    </View>
                    <View style={styles.textos}>
                        <View style={styles.nomefavorito}>
                            <View style={styles.nome}>
                                <Text style={styles.nomeplanta}>Milho</Text>
                                <Text style={styles.nomecientifico}>Zea mays</Text>
                            </View>
                            <Image source={require('../../../assets/images/core.png')}/>
                        </View>
                        <Text style={styles.descricaoplantaprincipal}>É uma das culturas mais importantes globalmente e possui diversas variedades, desde grãos amarelos e doces até grãos usados para a produção de farinha e ração animal. O milho é uma fonte rica de carboidratos, fibras e várias vitaminas e minerais. É utilizado para fazer uma ampla variedade de produtos, como alimentos, bebidas, óleos e até biocombustíveis. Além disso, partes da planta, como a palha e o sabugo, também são utilizadas em várias aplicações, desde a alimentação animal até a produção de papel e combustíveis.</Text>
                    </View>
                </View>
                <View style={styles.plantabaixa}>
                    <View style={styles.colunaplantas}>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/amendoim1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Amendoim</Text>
                                    <Text style={styles.nomecientifico}>Arachis hypogaea</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets//images/batatadoce1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Batata Doce</Text>
                                    <Text style={styles.nomecientifico}>Ipomoea batatas</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.colunaplantas}>
                    <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/batatadoce1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Batata doce</Text>
                                    <Text style={styles.nomecientifico}>Ipomoea batatas</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/couveflor1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Couve-flor</Text>
                                    <Text style={styles.nomecientifico}>Brassica oleracea var. botrytis</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    corcontainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFE7BC",
        borderRadius: 24,
        height: 170,
        width: 394,
        gap: 120,        
    },
    xis: {
        marginLeft: 16,
        marginTop: 51,
    },
    pequi: {
        position: "absolute",
        marginLeft: 148,
    },
    textoapresentacao: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 32,
        gap: 16,
    },
    titulo: {
        fontFamily: "Inter",
        color: "#1E1E1E",
        fontSize: 32,
        fontWeight: "bold",
    },
    descricao: {
        fontFamily: "Inter",
        color: "#1E1E1E",
        textAlign: "justify",
        fontSize: 12,
    },
    principal: {
        display: "flex",
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
    },
    plantaprincipal: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexDirection: "row",

    },
    imagemprincipal: {
        display: "flex",
        alignItems: "center",
        marginTop: 16,
        gap: 16,
    },
    textos: {
        display: "flex",
        flexDirection: "column",
        height: 136,
        alignItems: "flex-start",
        gap: 16,
        flex: 1,
    },
    nomefavorito: {
        display: 'flex',
        alignItems: "center",
        gap: 16,
        flexDirection: "row",
    },
    nome: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        flex: 1,
    },
    nomeplanta: {
        color: "#1E1E1E",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "bold",
    },
    nomecientifico: {
        overflow: "hidden",
        color: "#7D7D7D",
        fontFamily: "Inter",
        fontSize: 10,
        fontStyle: "italic",
    },
    descricaoplantaprincipal: {
        overflow: "hidden",
        flex: 1,
        color: "7D7D7D",
        textAlign: "justify",
        fontFamily: "Inter",
        fontSize: 9,   
    },
    plantabaixa: {
        display: "flex",
        alignItems: "flex-start",
        alignContent: "flex-start",
        flexDirection: "row",
        gap: 24,
    },
    colunaplantas: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
    },
    plantapequena: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 16,
    },
    figura: {
        width: 146,
        height: 146,
        borderTopLeftRadius: 48,
        borderBottomRightRadius: 48,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
    },

});
