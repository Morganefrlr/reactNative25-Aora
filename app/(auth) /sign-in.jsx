import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'


const SignIn = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image source={images.logo} resizeMode='contain' style={styles.logo}/>
        <Text style={styles.textLog}>Log in to Aora</Text>
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
  }
})