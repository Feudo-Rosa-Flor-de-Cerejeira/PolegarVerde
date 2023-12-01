
import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default function Button3(props){
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>
                {props.labelButton}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        width: 132,
        height: 42,
        backgroundColor: '#012E20',
        borderRadius: 8,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    texto:{
        color: '#F5F5F5',
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 'bold',

    },

})