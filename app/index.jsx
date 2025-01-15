import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'



export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>coucou!</Text>
      <StatusBar style=''/>
      <Link href='/profile' style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
      fontWeight:'bold',
      fontFamily: 'Poppins-Black'
    }
})