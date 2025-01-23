import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import {icons} from '../constants'



const FormField = ({title,value,setOnFocus, focusStyle, otherStyles, placeholder, handleChangeText, ...props }) => {
  
  const [showPassword,setShowPassword] = useState(false)

  
  return (
    <View style={[styles.formField, otherStyles]}>
      <Text style={styles.formTitle}>{title}</Text>

      <View 
        style={[styles.inputStyle, focusStyle]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onFocus={() =>setOnFocus(title)}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
          style={styles.placeholderStyle}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() =>setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain' style={styles.iconStyle}/>
          </TouchableOpacity>
        )}
      </View>
      
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    formField:{
        marginTop: 8
    },
    formTitle:{
        fontFamily:"Poppins-Medium",
        color:'#CDCDE0',
        fontSize: 16,

    },
    inputStyle:{
      width:'100%',
      height:64,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor:"#1E1E2D",
      borderRadius:16,
      borderWidth:2,
      borderColor:"#232533",
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
   
    },
    placeholderStyle:{
      flex: 1,
      color:'#fff',
      fontFamily:"Poppins-SemiBold",
      fontSize:16,
    },
    iconStyle:{
       width:24,
       height:24, 
    }
})