import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [onFocus, setOnFocus]= useState('')

  const submit =() =>{

  }
  

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image source={images.logo} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.textLog}>Log in to Aora</Text>
          <FormField 
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles={{marginTop : 28}}
            keyboardType='email-address'
            setOnFocus={setOnFocus}
            focusStyle={onFocus === 'Email' ? {borderColor : "#FF9C01"} : {}}
          />

          <FormField 
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles={{marginTop : 28}}
            setOnFocus={setOnFocus}
            focusStyle={onFocus === 'Password' ? {borderColor : "#FF9C01"} : {}}
          />

          <CustomButton
            title='Sing In'
            handlePress={submit}
            containerStyle={{marginTop : 28}}
            isLoading={isSubmitting}
          />

          <View style={styles.boxLink}>
            <Text style={styles.boxLinkText}>Don't have an account?</Text>
            <Link href='/sign-up' style={styles.link}>Signup</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeAreaView:{
    height:'100%',
    backgroundColor:'#161622'
  },
  viewStyle:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    paddingLeft:16,
    paddingRight:16,
    marginTop:24,
  },
  logo:{
    width: 115,
    height:35,
  },
  textLog:{
    fontSize: 24,
    color:'#fff',
    fontWeight:'600',
    marginTop: 40,
    fontFamily:"Poppins-SemiBold",
  },

  boxLink:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    paddingTop: 20,
    gap:8
  },
  boxLinkText:{
    fontSize: 18,
    fontFamily:"Poppins-Regular",
    color:"#CDCDE0",
  },
  link:{
    fontSize:18,
    fontFamily:"Poppins-SemiBold",
    color:"#FF9C01",
  }
})