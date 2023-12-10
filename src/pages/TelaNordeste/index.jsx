import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import BackButton from "../../../assets/components/BackButton.jsx";

export default function TelaNordeste({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.corcontainer}>
                <View style={styles.xis}>
                    <BackButton onPress={() => navigation.navigate("Rota")} />
                </View>
                <View style={styles.caju}>
                    <Image source={require('../../../assets/images/caju.png')}/>
                </View>
            </View>
            <View style={styles.textoapresentacao}>
                <Text style={styles.titulo}>Nordeste</Text>
                <Text style={styles.descricao}>
                A região Nordeste do Brasil tem um clima predominantemente semiárido no interior e tropical úmido na costa, com altas temperaturas e chuvas irregulares. A agricultura é desafiadora devido à variabilidade das chuvas, sendo o cultivo de plantas resistentes à seca, como cactos e palma, comuns no interior, enquanto nas áreas litorâneas, culturas como cana-de-açúcar e frutas tropicais prosperam devido às condições mais úmidas.
                </Text>
            </View>
            <View style={styles.principal}>
                <View style={styles.plantaprincipal}>
                    <View style={styles.imagemprincipal}>
                        <Image source={require('../../../assets/images/coco1.png')}/>
                    </View>
                    <View style={styles.textos}>
                        <View style={styles.nomefavorito}>
                            <View style={styles.nome}>
                                <Text style={styles.nomeplanta}>Coco</Text>
                                <Text style={styles.nomecientifico}>Cocos nucifera</Text>
                            </View>
                            <Image source={require('../../../assets/images/core.png')}/>
                        </View>
                        <Text style={styles.descricaoplantaprincipal}>O coco é uma fruta tropical originária da palmeira Cocos nucifera. Ele tem uma casca dura e fibrosa, com uma camada interna comestível branca e suculenta, conhecida como polpa de coco, que é rica em nutrientes e água. O coco é amplamente utilizado em diversas culinárias ao redor do mundo, tanto na forma de polpa como em produtos derivados, como leite de coco, óleo de coco, coco ralado e água de coco. Além disso, suas fibras são usadas em diversas aplicações, e a casca é usada como combustível ou na fabricação de objetos artesanais. O coco é conhecido por seus benefícios nutricionais e versatilidade.</Text>
                    </View>
                </View>
                <View style={styles.plantabaixa}>
                    <View style={styles.colunaplantas}>
                        <View style={styles.plantapequena}>
                            <View style={[styles.figura, {backgroundColor: "#7D7D7D"}]}>
                                <Image style={styles.figuratopo} source={require('../../../assets/images/batatadoce1.png')}/>
                            </View>
                            <View style={styles.nomefavorito}>
                                <View style={styles.nome}>
                                    <Text style={styles.nomeplanta}>Batata Doce</Text>
                                    <Text style={styles.nomecientifico}>Ipomoea batatas</Text>
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
        backgroundColor: "#FFD600",
        borderRadius: 24,
        height: 170,
        width: 394,
        gap: 120,        
    },
    xis: {
        marginLeft: 16,
        marginTop: 51,
    },
    caju: {
        position: "absolute",
        marginTop: 23,
        marginLeft: 180,
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
