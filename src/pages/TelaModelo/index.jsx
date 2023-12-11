import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView,} from "react-native";
import ExitButton from "../../../assets/components/ExitButton.jsx";
import React, { useState,useEffect } from "react";
import { db } from '../../../Services/firebaseConfig';
import { collection, getDocs,query, where} from 'firebase/firestore';

//import { titulo, subtitulo, descricao, imagem, Tsolo,  } from "../../data/data.js";

export default function TelaModelo({ navigation,route }) {
  const {Nome} =  route.params
  const [isExpandedDetalhe, setIsExpandedDetalhe] = useState(false);
  const [isExpandedComoCultivar, setIsExpandedComoCultivar] = useState(false);
  const [isExpandedDuvidas, setIsExpandedDuvidas] = useState(false);
  const [dataPlantas,setDataPlantas] = useState([])
  const plantasCollection = collection(db, 'Plantas');
  
  const buscarPlantasMorango = async () => {
    try {
      const q = query(plantasCollection, where('Nome', '==', `${Nome}`));
      const querySnapshot = await getDocs(q);
  
      // Iterar sobre os documentos encontrados
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, ' => ', doc.data());
        setDataPlantas(doc.data())
      });
    } catch (error) {
      console.error('Erro ao buscar plantas:', error);
    }
  };
  
  useEffect(()=>{
    buscarPlantasMorango();
    console.log(dataPlantas)
  },[])
  useEffect(()=>{
    console.log(dataPlantas.Nome)
  },[dataPlantas])

  const toggleAccordion = (toggleId) => {
    switch (toggleId) {
      case "detalhes":
        setIsExpandedDetalhe(!isExpandedDetalhe);
        break;

      case "comoCultivar":
        setIsExpandedComoCultivar(!isExpandedComoCultivar);
        break;

      case "Duvidas":
        setIsExpandedDuvidas(!isExpandedDuvidas);
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.coloridocomimagem}>
        <View style={styles.xis}>
          <ExitButton onPress={() => navigation.goBack()} />
        </View>
        <View style={[styles.quadradocolorido, {backgroundColor:`${dataPlantas.Cor}`}]} />
        <Image
          src={`${dataPlantas.URL}`}
          style={styles.imagem}
        />
      </View>
      <View style={styles.containerinfo}>
        <View style={styles.containerTexto}>
          <Text style={styles.titulo}>{dataPlantas.Nome}</Text>
          <Text style={styles.subtitulo}>{dataPlantas.NomeAlternativos}</Text>
          <Text style={styles.descricao}>
            {dataPlantas.Descricao}
          </Text>
        </View>
        <View style={styles.containerCarac}>
          <Text style={styles.caract}>Características</Text>
          <View style={styles.quadradinhos}>
            <View style={styles.solo}>
              <Image
                style={styles.Isolo}
                source={require("../../../assets/images/solo.png")}
              />
              <Text style={styles.Tsolo}>Solo {dataPlantas.Solo}</Text>
            </View>
            <View style={styles.Tempo}>
              <Image
                style={styles.Itempo}
                source={require("../../../assets/images/tempo.png")}
              />
              <Text style={styles.T1tempo}>Colheita em</Text>
              <Text style={styles.T2tempo}>{dataPlantas.Paciencia}</Text>
            </View>
            <View style={styles.Luz}>
              <Image
                style={styles.Iluz}
                source={require("../../../assets/images/luz.png")}
              />
              <Text style={styles.Tluz}>{dataPlantas.Luz}</Text>
            </View>
            <View style={styles.agua}>
              <View style={styles.Iagua}>
                <Image
                  style={styles.Iagua1}
                  source={require("../../../assets/images/drop.png")}
                />
                <Image
                  style={styles.Iagua2}
                  source={require("../../../assets/images/drop.png")}
                />
                <Image
                  style={styles.Iagua3}
                  source={require("../../../assets/images/drop1.png")}
                />
              </View>
              <Text style={styles.Tagua}>Rega de {dataPlantas.Rega}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Accordeons}>
          <View style={styles.CaixaAccor1}>
            <TouchableOpacity onPress={() => toggleAccordion("detalhes")}>
              <View style={styles.caixatextotitulo1}>
                <Text style={styles.nomeAccor}>Detalhes</Text>
                <Image
                  source={require("../../../assets/images/Vector.png")}
                  style={styles.setinha1}
                />
              </View>
            </TouchableOpacity>
          </View>
          {isExpandedDetalhe && (
            <View style={styles.caixatextoaccord}>
              <View style={styles.informações1}>
                <Text style={styles.Origem}>Origem:</Text>
                <Text style={styles.TextoOrigem}>
                  América Central e América do Sul
                </Text>
                <Text style={styles.Nutri}>Nutrientes: </Text>
                <Text style={styles.TextoNutri}>
                  Gorduras Saudáveis: Principalmente ácidos graxos
                  monoinsaturados, benéficos para a saúde do coração. {"\n"}
                  Vitaminas: Notavelmente vitamina K, vitamina E, vitamina C e
                  várias do complexo B. {"\n"}
                  Minerais: Como potássio, magnésio e cobre. {"\n"}
                  Fibras: Importantes para a digestão e a saúde do trato
                  gastrointestinal.
                </Text>
                <Text style={styles.Benefícios}> Beneficios para a saúde:</Text>
                <Text style={styles.TextoBenef}>
                  Saúde do coração, digestão, saúde da pele, controle da pressão
                  arterial, redução de inflamação e sensação de saciedade.
                </Text>
              </View>
            </View>
          )}
          <View style={styles.CaixaAccor2}>
            <TouchableOpacity onPress={() => toggleAccordion("comoCultivar")}>
              <View style={styles.caixatextotitulo2}>
                <Text style={styles.nomeAccor}>Como Cultivar?</Text>
                <Image
                  source={require("../../../assets/images/Vector.png")}
                  style={styles.setinha2}
                />
              </View>
            </TouchableOpacity>
          </View>
          {isExpandedComoCultivar && (
            <View style={styles.caixatextoaccord}>
              <View style={styles.informações2}>
                <Text style={styles.Variedade}>1. Escolha da Variedade:</Text>
                <Text style={styles.TextoVari}>
                  Escolha uma variedade de abacateiro adequada ao seu clima.
                  Existem variedades adaptadas a diferentes condições, como
                  abacates tropicais ou abacates que podem suportar climas mais
                  frios.
                </Text>
                <Text style={styles.Solo}>2. Preparação do Solo: </Text>
                <Text style={styles.TextoSolo}>
                  O solo deve ser bem drenado para evitar o acúmulo de água nas
                  raízes. Se o solo for pesado, adicione material orgânico para
                  melhorar a drenagem.
                </Text>
                <Text style={styles.Plantio}>3. Plantio:</Text>
                <Text style={styles.TextoPlantio}>
                  Plante o caroço do abacate em um buraco profundo o suficiente
                  para cobrir as raízes, mas deixando a metade do caroço acima
                  do solo. Se possível, plante dois ou mais abacateiros para
                  garantir a polinização cruzada.
                </Text>
                <Text style={styles.Rega}>4. Rega: </Text>
                <Text style={styles.TextoRega}>
                  Abacateiros precisam de água regularmente, especialmente
                  durante períodos secos. No entanto, evite o excesso de água
                  para evitar o apodrecimento das raízes. Uma irrigação profunda
                  e ocasional é preferível a regas superficiais frequentes.
                </Text>
                <Text style={styles.Adubo}>5. Adubação:</Text>
                <Text style={styles.TextoAdubo}>
                  Fertilize a planta regularmente com adubo orgânico rico em
                  matéria orgânica e nutrientes essenciais. O abacateiro é
                  sensível a deficiências de nutrientes, por isso, certifique-se
                  de fornecer uma nutrição adequada.
                </Text>
                <Text style={styles.Poda}>6. Poda:</Text>
                <Text style={styles.TextoPoda}>
                  Faça podas regulares para controlar o tamanho da planta e
                  estimular o crescimento saudável. Remova galhos mortos ou
                  doentes para manter a árvore vigorosa.
                </Text>
                <Text style={styles.Pragas}>
                  7. Proteção contra Pragas e Doenças:
                </Text>
                <Text style={styles.TextoPragas}>
                  Monitore a planta para pragas e doenças. Use medidas orgânicas
                  ou, se necessário, produtos químicos para controlar problemas
                  como insetos e fungos.
                </Text>
                <Text style={styles.Paciencia}>8. Paciência</Text>
                <Text style={styles.TextoPaci}>
                  O abacateiro pode levar alguns anos para começar a dar frutos,
                  às vezes até 3-4 anos ou mais, então seja paciente e continue
                  cuidando da planta.
                </Text>
                <Text style={styles.Colheita}>9. Colheita:</Text>
                <Text style={styles.TextoCol}>
                  Os abacates estão prontos para colher quando mudam de cor
                  (dependendo da variedade) e cedem ligeiramente ao toque. Colha
                  cuidadosamente para evitar danos à fruta.
                </Text>
              </View>
            </View>
          )}
          <View style={styles.CaixaAccor3}>
            <TouchableOpacity onPress={() => toggleAccordion("Duvidas")}>
              <View style={styles.caixatextotitulo3}>
                <Text style={styles.nomeAccor}>Dúvidas</Text>
                <Image
                  source={require("../../../assets/images/Vector.png")}
                  style={styles.setinha3}
                />
              </View>
            </TouchableOpacity>
          </View>
          {isExpandedDuvidas && (
            <View style={styles.caixatextoaccord}>
              <View style={styles.informações3}>
                <Text style={styles.Duv1}>
                  1. Por que meu abacateiro não está dando frutos?
                </Text>
                <Text style={styles.textoD1}>
                  O abacateiro pode levar alguns anos para começar a produzir
                  frutos, então a paciência é fundamental. Certifique-se de que
                  a planta está recebendo água suficiente, luz solar adequada e
                  nutrientes apropriados. Além disso, algumas variedades de
                  abacate necessitam de polinização cruzada, então verifique se
                  você tem pelo menos duas árvores compatíveis para assegurar a
                  polinização.
                </Text>
                <Text style={styles.Duv2}>
                  2. Quando é o melhor momento para colher os abacates?
                </Text>
                <Text style={styles.textoD2}>
                  Abacates estão prontos para colher quando mudam de cor e cedem
                  ligeiramente ao toque. A cor pode variar dependendo da
                  variedade, mas a maioria dos abacates muda de verde para roxo
                  ou preto quando maduros. Evite colher abacates verdes e
                  deixe-os amadurecer em temperatura ambiente.
                </Text>
                <Text style={styles.Duv3}>
                  3. Como posso evitar que os abacates apodreçam na árvore?
                </Text>
                <Text style={styles.textoD3}>
                  Evite regar excessivamente para prevenir o apodrecimento das
                  raízes. Além disso, ao colher os abacates, não danifique a
                  casca, pois isso pode levar à entrada de fungos e bactérias
                  que causam o apodrecimento.
                </Text>
                <Text style={styles.Duv4}>
                  4. O que fazer se as folhas do meu abacateiro estiverem
                  amarelas?
                </Text>
                <Text style={styles.textoD4}>
                  Folhas amarelas podem indicar falta de nutrientes, como
                  nitrogênio, ou excesso de água. Certifique-se de fertilizar a
                  planta adequadamente e ajuste a quantidade de água conforme
                  necessário. Também verifique se há sinais de pragas ou
                  doenças.
                </Text>
                <Text style={styles.Duv5}>
                  5. Posso cultivar abacate em um vaso?
                </Text>
                <Text style={styles.textoD5}>
                  Sim, é possível cultivar abacate em vasos, especialmente as
                  variedades anãs. No entanto, escolha um vaso grande o
                  suficiente para acomodar o crescimento das raízes.
                  Certifique-se de proporcionar drenagem adequada e,
                  ocasionalmente, transplante a planta para um vaso maior
                  conforme ela cresce.
                </Text>
                <Text style={styles.Duv6}>
                  6. Posso plantar um abacateiro a partir do caroço?
                </Text>
                <Text style={styles.textoD6}>
                  Sim, você pode plantar um abacateiro a partir do caroço.
                  Remova o caroço com cuidado, deixe-o secar por alguns dias e,
                  em seguida, plante-o em um solo bem drenado. No entanto, saiba
                  que as plantas cultivadas a partir de caroços podem não
                  reproduzir exatamente as características da planta-mãe. Para
                  garantir uma variedade específica, é melhor comprar uma muda
                  de um viveiro confiável.
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
  },
  quadradocolorido: {
    position: "absolute",
    backgroundColor: "#012E20",
    height: 374,
    width: 258,
    top: 0,
    display: "flex",
    right: 0,
    borderBottomLeftRadius: 48,
  },
  imagem: {
    left: 0,
    position: "absolute",
    width: 275,
    height: 275,
    marginTop: 80,
    marginLeft: 75,
  },
  coloridocomimagem: {
    display: "flex",
    flexDirection: "row",
  },
  xis: {
    marginTop: 51,
    marginLeft: 16,
  },
  containerinfo: {
    display: "flex",
    flexDirection: "column",
  },
  containerTexto: {
    marginTop: 340,
    marginLeft: 20,
    marginRight: 20,
  },
  titulo: {
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitulo: {
    fontFamily: "Inter",
    color: "#787877",
    fontSize: 12,
    fontStyle: "italic",
  },
  descricao: {
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 12,
    marginTop: 10,
  },
  containerinfo: {
    display: "flex",
    flexDirection: "column",
  },
  containerCarac: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  caract: {
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
  },
  quadradinhos: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
  },
  solo: {
    width: 72,
    height: 80,
    backgroundColor: "#2E1409",
    borderRadius: 11.8,
  },
  Isolo: {
    marginTop: 16,
    marginLeft: 20,
    width: 32.319,
    height: 25.871,
  },
  Tsolo: {
    marginTop: 12,
    fontFamily: "Inter",
    color: "#F5F5F5",
    fontSize: 9,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Tempo: {
    width: 72,
    height: 80,
    backgroundColor: "#479F26",
    borderRadius: 11.8,
    marginLeft: 20,
  },
  Itempo: {
    marginTop: 12,
    marginLeft: 20,
    width: 32.32,
    height: 32.32,
  },
  T1tempo: {
    marginTop: 4,
    marginLeft: 13,
    fontFamily: "Inter",
    color: "#F5F5F5",
    fontSize: 8,
  },
  T2tempo: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#F5F5F5",
    fontSize: 9,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Luz: {
    width: 72,
    height: 80,
    backgroundColor: "#F9C200",
    borderRadius: 11.8,
    marginLeft: 20,
  },
  Iluz: {
    marginTop: 12,
    marginLeft: 16,
    width: 39,
    height: 39,
  },
  Tluz: {
    marginTop: 6,
    fontFamily: "Inter",
    color: "#F5F5F5",
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  agua: {
    width: 72,
    height: 80,
    backgroundColor: "#00C3D4",
    borderRadius: 11.8,
    marginLeft: 20,
  },
  Iagua: {
    display: "flex",
    flexDirection: "row",
  },
  Iagua1: {
    marginTop: 22,
    marginLeft: 12,
    width: 11.463,
    height: 16,
  },
  Iagua2: {
    marginTop: 22,
    marginLeft: 7,
    width: 11.463,
    height: 16,
  },
  Iagua3: {
    marginTop: 22,
    marginLeft: 7,
    width: 11.463,
    height: 16,
  },
  Tagua: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: "Inter",
    color: "#F5F5F5",
    fontWeight: 'bold',
    fontSize: 8,
  },
  Accordeons: {
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20,
  },
  CaixaAccor1: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    gap: -20,
  },
  caixatextotitulo1: {
    display: "flex",
    flexDirection: "row",
    height: 33,
    marginLeft: 16,
    alignItems: "center",
  },
  nomeAccor: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
  },
  setinha1: {
    marginLeft: 260,
  },
  caixatextoaccord: {
    marginTop: -10,
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    backgroundColor: "#EDEDED",
    borderBottomEndRadius: 16,
    borderBottomTopRadius: 0,
    paddingBottom: 16,
  },
  informações1: {
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    marginEnd: 50,
    width: 280,
    backgroundColor: "#EDEDED",
  },
  Origem: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoOrigem: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Nutri: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoNutri: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Benefícios: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoBenef: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  CaixaAccor2: {
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
  },
  caixatextotitulo2: {
    display: "flex",
    flexDirection: "row",
    height: 33,
    marginLeft: 16,
    alignItems: "center",
  },
  nomeAccor: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
  },
  setinha2: {
    marginLeft: 218,
  },
  caixatextoaccord: {
    marginTop: -10,
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    backgroundColor: "#EDEDED",
    borderRadius: 16,
    paddingBottom: 16,
  },
  informações2: {
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    marginEnd: 50,
    width: 280,
    backgroundColor: "#EDEDED",
    borderBottomEndRadius: 8,
  },
  Variedade: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoVari: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Solo: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoSolo: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Plantio: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoPlantio: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Rega: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoRega: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Adubo: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoAdubo: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Poda: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoPoda: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Pragas: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoPragas: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Paciencia: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoPaci: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Colheita: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  TextoCol: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  CaixaAccor3: {
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
  },
  caixatextotitulo3: {
    display: "flex",
    flexDirection: "row",
    height: 33,
    marginLeft: 16,
    alignItems: "center",
  },
  nomeAccor: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
  },
  setinha3: {
    marginLeft: 265,
  },
  caixatextoaccord: {
    marginTop: -10,
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    backgroundColor: "#EDEDED",
    borderRadius: 16,
    paddingBottom: 16,
  },
  informações3: {
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    marginEnd: 50,
    width: 280,
    backgroundColor: "#EDEDED",
    borderBottomEndRadius: 8,
  },
  Duv1: {
    marginTop: 0,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD1: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Duv2: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD2: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Duv3: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD3: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Duv4: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD4: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Duv5: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD5: {
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
  Duv6: {
    marginTop: 15,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "bold",
  },
  textoD6: {
    marginTop: 0,
    marginLeft: 30,
    fontFamily: "Inter",
    color: "#1E1E1E",
    fontSize: 13,
    fontWeight: "normal",
    textAlign: "justify",
  },
});