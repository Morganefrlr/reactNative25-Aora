import { StyleSheet } from 'react-native'



//////////////////// Style Index.jsx ////////////////////

export const homePageStyle = StyleSheet.create({
    appMainContainer:{
      backgroundColor:'#161622',
      height:'100%',
    },
    appContainer:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
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