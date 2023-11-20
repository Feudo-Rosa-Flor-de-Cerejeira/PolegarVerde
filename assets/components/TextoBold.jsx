import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextoBold({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>
        Já tem uma conta?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login2')}>
          <Text style={styles.boldText}>
            Faça Login
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  boldText: {
    fontWeight: 'bold',
    marginLeft: -90,
  },
  normalText: {
    color: '#1E1E1E',

  },
});

