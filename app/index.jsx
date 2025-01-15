import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'



export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>coucou!</Text>
      <StatusBar style=''/>
      <Link href='/home' style={{color: 'blue'}}>Go to Home</Link>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
      fontSize:'12',
      fontFamily: 'Poppins-Black'
    }
})