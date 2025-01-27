import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import {icons} from '../constants'
import { formFieldStyle } from '../styles/componentsStyle/styles'



const FormField = ({title,value,setOnFocus, focusStyle, otherStyles, placeholder, handleChangeText, ...props }) => {
  
  const [showPassword,setShowPassword] = useState(false)

  
  return (
    <View style={[formFieldStyle.formField, otherStyles]}>
      <Text style={formFieldStyle.formTitle}>{title}</Text>

      <View 
        style={[formFieldStyle.inputStyle, focusStyle]}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onFocus={() =>setOnFocus(title)}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
          style={formFieldStyle.placeholderStyle}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() =>setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain' style={formFieldStyle.iconStyle}/>
          </TouchableOpacity>
        )}
      </View>
      
    </View>
  )
}

export default FormField

