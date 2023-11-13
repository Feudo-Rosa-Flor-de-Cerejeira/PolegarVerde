import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Button(props){
    const [color, setColor] = useState(props.cor);

    const coloridinho = () => {
        const newColoridinho = {cor}
        setColor = newColoridinho
    }

  return (
    <TouchableOpacity styles={styles.button}
        onPress={props.paralelepipedo}
    >
        <Text style={{ color }}>
        {props.labelButton}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 42,
        width: 312,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    
})