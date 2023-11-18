import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button(props){

    return (
    <TouchableOpacity onPress={props.onPress} style={{
        ...props.style,
        ...styles.button
    }}>
        <Text style={{
            color: props.style.color ? props.style.color : "#ffffff"
        }}>
            {props.children}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
})