import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import BackButton from "../../../assets/components/BackButton.jsx";

export default function TelaNorte({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.corcontainer}>
                <View style={styles.xis}>
                    <BackButton onPress={() => navigation.navigate("GuiaVerde")} />
                </View>
                <View style={styles.castanha}>
                    <Image source={require('../../../assets/images/castanha.png')}/>
                </View>
            </View>
            <View style={styles.textoapresentacao}>
                <Text style={styles.titulo}>Norte</Text>
                <Text style={styles.descricao}>
                A região Norte do Brasil possui um clima predominantemente equatorial, caracterizado por temperaturas altas e chuvas frequentes ao longo do ano. Esta região é coberta pela maior parte da Floresta Amazônica, apresentando solos férteis e ideais para o cultivo de uma vasta gama de plantas tropicais. A seguir, confira algumas delas.
                </Text>
            </View>
            <View style={styles.principal}>
                <View style={styles.plantaprincipal}>
                    <View style={styles.imagemprincipal}>
                        <Image source={require('../../../assets/images/mandioca.png')}/>
                    </View>
                    <View style={styles.textos}>
                        <View style={styles.nomefavorito}>
                            <View style={styles.nome}>
                                <Text style={styles.nomeplanta}>Mandioca</Text>
                                <Text style={styles.nomecientifico}>Manihot esculenta</Text>
                            </View>
                            <Image source={require('../../../assets/images/core.png')}/>
                        </View>
                        <Text style={styles.descricaoplantaprincipal}>A mandioca, também conhecida como aipim ou macaxeira, é uma planta de raiz comestível amplamente cultivada em regiões tropicais. Suas raízes tuberosas são ricas em amido e são uma fonte importante de carboidratos na dieta de muitas comunidades ao redor do mundo.</Text>
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
                                    <Text style={styles.nomeplanta}>Mandioca</Text>
                                    <Text style={styles.nomecientifico}>Manihot esculenta</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/amendoim1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Mandioca</Text>
                                    <Text style={styles.nomecientifico}>Manihot esculenta</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.colunaplantas}>
                    <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/milho1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Milho</Text>
                                    <Text style={styles.nomecientifico}>Zea mays</Text>
                                </View>
                                <Image source={require('../../../assets/images/core.png')}/>
                            </View>
                        </View>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/milho1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Mandioca</Text>
                                    <Text style={styles.nomecientifico}>Manihot esculenta</Text>
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
        backgroundColor: "#CE3B06",
        borderRadius: 24,
        height: 170,
        width: 394,
        gap: 120,        
    },
    xis: {
        marginLeft: 16,
        marginTop: 51,
    },
    castanha: {
        width: 240,
        height: 238.849,
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
