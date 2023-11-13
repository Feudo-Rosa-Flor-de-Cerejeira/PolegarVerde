import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Button = ({labelButton, onpress}, props) => {
    const [color, setColor] = useState(props.cor)

    //const corzinha () => {
        //const newcolor = {cor}
    //}
  return (
    <TouchableOpacity styles={styles.button}
        onpress={onpress}
    >
        <Text style={{color}}>
        {labelButton}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 42,
        width: 312,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    
})