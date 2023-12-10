import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Text,
    ScrollView,
  } from 'react-native';
  import React, { useEffect,useState} from 'react';
  import CustomImageCarousalSquare from '../../../assets/components/CustomImageCarousalSquare';
  import CustomImageCarousalLandscape from '../../../assets/components/CustomImageCarousalLandscape';
  import CustomImageCarousal from '../../../assets/components/CustomImageCarousalCircle';
  import CustomImageCarousalRectan from '../../../assets/components/CustomImageCarousalRectan';
  import { db } from '../../../Services/firebaseConfig';
  import { collection, getDocs } from 'firebase/firestore';

const GuiaVerde = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [dataDb,setData] = useState([])
  const [dataAmb,setDataAmb] = useState([])
  const [dataFer,setDataFer] = useState([])
  const [dataReg,setDataReg] = useState([])
  
    const getData = async () => {
      const ref = collection(db,'BancoTeste')
      const dataFire= await getDocs(ref)
      const alldata = dataFire.docs.map(val => ({...val.data(),id:val.id}))
      setData(alldata)
    }
    const getDataReg = async () => {
      const refReg = collection(db,'Regionais')
      const dataReg= await getDocs(refReg)
      const alldataReg = dataReg.docs.map(val => ({...val.data(),id:val.id}))
      setDataReg(alldataReg)
    }
    const getDataFer = async () => {
      const refFer = collection(db,'Ferramentas')
      const dataFer= await getDocs(refFer)
      const alldataFer = dataFer.docs.map(val => ({...val.data(),id:val.id}))
      setDataFer(alldataFer)
    }
    const getDataAmb =async () => {
      const refAmb = collection(db,'Ambiente')
      const dataAmb= await getDocs(refAmb)
      const alldataAmb = dataAmb.docs.map(val => ({...val.data(),id:val.id}))
      setDataAmb(alldataAmb)
    }
  useEffect(()=>{
      getData();
      getDataReg();
      getDataFer();
      getDataAmb();
    },[])

  useEffect(()=>{
    if (dataAmb.length >1) {
      setMostrarComponente(true);
      console.log("dataReg")
    }
  },[dataAmb])

  return (
    
    <SafeAreaView style={styles.container}>
      {mostrarComponente &&(
        <ScrollView showsVerticalScrollIndicator={false}>
    
    <View style={styles.carouselContainer}>
      <Text style={styles.textTitulo}>Ferramentas</Text>
      <CustomImageCarousalLandscape
        data={dataFer}
        pagination={false}
      />
    </View>
    
    <View style={styles.carouselContainer}>
      <Text style={styles.textTitulo}>Populares</Text>
      <CustomImageCarousalSquare
        data={dataDb}
        pagination={false}
      />
    </View>
    <View style={styles.carouselContainer}>
      <Text style={styles.textTitulo}>Por Ambiente</Text>
      <CustomImageCarousal
        data={dataAmb}
        pagination={false}
      />
    </View>
    
    <View style={styles.Regionais}>
      <Text style={styles.textTitulo}>Regionais</Text>
      <CustomImageCarousalRectan
        data={dataReg}
        pagination={false}
      />
    </View>
    </ScrollView>
      )}
    
  </SafeAreaView>
  )
}


export default GuiaVerde

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: 'white',
      overflow : 'visible',
    },
    textTitulo: { fontSize:22,textAlign: 'left', color: 'black', marginBottom: 10,marginLeft : 30, fontWeight: "bold"},
    carouselContainer: {
      marginBottom: 20,
    },
    Regionais :{
      paddingBottom :70,
    }
  });