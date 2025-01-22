import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title, containerStyle, handlePress, textStyle, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={[styles.touchableStyle, containerStyle, isLoading ? {opacity:0.5}:{}]}
        disabled={isLoading}
        >
      <Text style={[styles.textButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton


const styles = StyleSheet.create({
    touchableStyle:{
        backgroundColor:'#FF9C01',
        borderRadius:12,
        minHeight:62,
        justifyContent:'center',
        alignItems:'center',
    },
    textButton:{
        color:'#161622',
        fontFamily:'Poppins-SemiBold',
        fontSize:18,  
    }
})