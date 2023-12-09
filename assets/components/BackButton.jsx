import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'

export default function ExitButton(prop) {
  return (
    <TouchableOpacity onPress={prop.onPress}>
        <Image source={require('../images/back.png')}/>
    </TouchableOpacity>
  );
};