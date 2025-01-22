import { ScrollView, StyleSheet, View, Image, Text, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'



export default function App(){
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{height : '100%'}}>
        <View style={styles.viewContainer}>
          <Image source={images.logo} style={styles.logoStyle} resizeMode='contain'/>
          <Image source={images.cards} style={styles.cardsStyle} resizeMode='contain'/>
          <View style={styles.test}>
            <Text style={styles.textSyle}>Discover Endless possibilities with 
              <Text style={styles.textAoraStyle}> Aora</Text>
            </Text>
            <Image source={images.path} style={styles.styleDeco} resizeMode='contain'/>
          </View>
          <Text style={styles.textPresentation}>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
      backgroundColor:'#161622',
      height:'100%'
    },
    viewContainer:{
      width:'100%',
      alignItems:'center',
      height:'100%',
      padding:16
    },
    logoStyle :{
      width:130,
      height:84
    },
    cardsStyle:{
      maxWidth:380,
      width:'100%',
      height:300
    },
    test:{
      position:'relative',
      marginTop:20
    },
    textSyle:{
      fontSize:30,
      fontWeight:700,
      textAlign:'center',
      color:'#fff',
    },
    textAoraStyle:{
      color:"#FF8E01",
    },
    styleDeco:{
      width:136,
      height:15,
      position:'absolute',
      bottom:-8,
      right:-32
    },
    textPresentation:{
      fontSize: 14,
      fontFamily:'Poppins-Regular',
      color:'#CDCDE0',
      marginTop: 28,
      textAlign:'center'
    }
})