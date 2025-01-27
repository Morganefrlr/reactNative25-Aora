import { View, Text, ScrollView, Image } from 'react-native'
import CustomButton from '../CustomButton'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../FormField'
import { useState } from 'react'
import { formAuthStyle } from '../../styles/componentsStyle/styles'


const FormAuth = ({pageAuthDetail, formFieldConfig, handleChangeText}) => {


    const [onFocus, setOnFocus]= useState('')
    const [isSubmitting,setIsSubmitting] = useState(false)



  return (
    <SafeAreaView style={formAuthStyle.safeAreaView}>
      <ScrollView>
        <View style={formAuthStyle.viewStyle}>
          <Image source={images.logo} resizeMode='contain' style={formAuthStyle.logo}/>
          <Text style={formAuthStyle.textLog}>{pageAuthDetail.titlePage}</Text>
          
          {formFieldConfig.map(field =>
            <FormField 
              key={field.title}
              title={field.title}
              value={field.form}
              handleChangeText={(e) => handleChangeText(e, field.value)}
              otherStyles={{marginTop : 28}}
              //keyboardType='email-address'
              setOnFocus={setOnFocus}
              focusStyle={onFocus === field.title ? {borderColor : "#FF9C01"} : {}}
            />
          )}
          

          <CustomButton
            title={pageAuthDetail.titleButton}
            //handlePress={submit}
            containerStyle={{marginTop : 28}}
            isLoading={isSubmitting}
          />

          <View style={formAuthStyle.boxLink}>
            <Text style={formAuthStyle.boxLinkText}>{pageAuthDetail.boxLinkText}</Text>
            <Link href={pageAuthDetail.linkHref} style={formAuthStyle.link}>{pageAuthDetail.link}</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormAuth
