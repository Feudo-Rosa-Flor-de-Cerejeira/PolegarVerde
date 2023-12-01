import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default function Button4(props){
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>
                Anterior
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        width: 132,
        height: 42,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: '#1E1E1E',
        borderWidth: 1.5,
    },
    texto:{
        color: '#1E1E1E',
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 'bold',

    },

})