import {  StyleSheet } from 'react-native'
//////////////////// Style Components ////////////////////

//////////////////// Style component FormAuth.jsx ////////////////////

export const formAuthStyle = StyleSheet.create({
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


//////////////////// Style component FormField.jsx ////////////////////

export const formFieldStyle = StyleSheet.create({
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