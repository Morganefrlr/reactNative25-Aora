import { Image, StyleSheet, Text, View } from 'react-native'


const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View style={styles.tabContainer}>
          <Image 
            source={icon} 
            resizeMode='contain' 
            tintColor={color}
            style={{width: 18, height:18}}
          />
          <Text style={[focused ? {fontWeight: 600} : {fontWeight: 400}, {fontSize:10 , color : color}]  }>{name}</Text>
        </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    tabContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
        width:52,
    }
})