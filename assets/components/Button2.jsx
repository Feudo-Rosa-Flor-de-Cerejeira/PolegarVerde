
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button2 (props){
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        {props.labelButton}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 312,
    height: 36,
    marginTop: 10,
    backgroundColor: '#012E20',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 12, 
    fontFamily: 'Inter',
  },
});
