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
  TouchableOpacity
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "../../../Services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

const Todos = () => {
  const navigation = useNavigation()
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [dataDb, setData] = useState([]);
  const [dataAlf, setAlf] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = useCallback(async () => {
    const ref = collection(db, "Plantas");
    const dataFire = await getDocs(ref);
    const alldata = dataFire.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setData(dataFire.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  },[]);

  useEffect(() => {
    getData();
    console.log(dataAlf);
  }, [getData]);

  //setAlf(dataDb.sort((a, b) => a.Nome.localeCompare(b.nome)));


  const filterData = () => {
    return dataDb.filter((item) =>
      item.Nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      {mostrarComponente && (
        <View style={styles.container2}>
         
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
              <TouchableOpacity onPress={() => navigation.navigate('TelaModelo', { Nome: item.Nome })}>
              <View style={styles.lista}>
                
                <Image src={`${item.URL}`} style={styles.image} />
                <View style={styles.lista1}>
                  <Text style={styles.textTitulo}>{item.Nome}</Text>
                  <Text style={styles.textSub}>{item.NomeAlternativos}</Text>
                </View>
                <Ionicons
                  name="heart-outline"
                  color={"#7d7d7d"}
                  size={25}
                  style={styles.icon}
                ></Ionicons>
                
              </View>
              </TouchableOpacity>
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
    paddingVertical :50,
    padding: 8,
  },
  container2 :{
    paddingBottom:50,
    gap: 16,
  },
  pesquisa: {
    flexDirection: "row",
    color: "black",
    justifyContent:'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E5E5E7",
    borderRadius: 32,
    marginHorizontal: 16,
    gap: 16,
  },
  lupa :{
    alignItems : 'center'
  },
  textpesquisa: {
    color: "black",
    
  },
  lista: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: "white",
   
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
    fontFamily: 'Inter',
    textAlign: "left",
    color: '#1E1E1E',
    marginTop: 5,
    fontWeight: "bold",
  },
  textSub: {
    fontSize: 12,
    textAlign: "left",
    fontFamily: 'Inter',
    color: "#7D7D7D",
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
