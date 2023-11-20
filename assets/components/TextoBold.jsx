import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextoBold(){
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>
        Já tem uma conta?
      </Text>
      <TouchableOpacity >
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
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginLeft: -90,
  },
  normalText: {
    fontFamily: 'Inter',
    color: '#1E1E1E',

  },
});

