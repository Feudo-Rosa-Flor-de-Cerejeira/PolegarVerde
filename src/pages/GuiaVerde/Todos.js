import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../../Services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";

const Todos = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [dataDb, setData] = useState([]);
  const [dataAlf, setAlf] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    const ref = collection(db, "BancoTeste");
    const dataFire = await getDocs(ref);
    const alldata = dataFire.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setData(dataFire.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
    console.log(dataAlf);
  }, []);

  //setAlf(dataDb.sort((a, b) => a.Nome.localeCompare(b.nome)));


  const filterData = () => {
    return dataDb.filter((item) =>
      item.Nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      {mostrarComponente && (
        <View>
          <View style={styles.pesquisa}>
          <Ionicons
                style={styles.lupa}
                name="search-outline"
                color={"black"}
                size={25}
              ></Ionicons>
            <TextInput
              style={styles.textpesquisa}
              placeholder="Pesquisar"
              placeholderTextColor="#99989C"
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>
          <FlatList
            data={filterData()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.lista}>
                <Image src={`${item.URL}`} style={styles.image} />
                <View style={styles.lista1}>
                  <Text style={styles.textTitulo}>{item.Nome}</Text>
                  <Text style={styles.textSub}>{item.Subtitulo}</Text>
                </View>
                <Ionicons
                  name="heart-outline"
                  color={"black"}
                  size={25}
                  style={styles.icon}
                ></Ionicons>
              </View>
            )}
          />
        </View>
        
      )}
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    overflow: "visible",
  },
  pesquisa: {
    flexDirection: "row",
    color: "black",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#E5E5E7",
    borderRadius: 20,
  },
  lupa :{
    padding:5,
    alignItems : 'center'
  },
  textpesquisa: {
    color: "black",
    paddingLeft: 20,
    
  },
  lista: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
  },
  lista1: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textTitulo: {
    fontSize: 18,
    textAlign: "left",
    color: "black",
    marginTop: 5,
    fontWeight: "bold",
  },
  textSub: {
    fontSize: 9,
    textAlign: "left",
    color: "black",
    fontWeight: "200",
    fontStyle: "italic",
  },
  image: {
    width: "12%",
    height: undefined,
    aspectRatio: 1,
  },
  icon: {
    paddingRight: 10,
    paddingTop: 10,
  },
});
