import { StyleSheet, View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import {icons} from '../../constants'



const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View style={styles.container}>
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


const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor:'#ffa001',
          tabBarInactiveTintColor:'#cdcde0',
          tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84
          }

        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: 'Home',
            headerShown:false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name='Home'
                  focused={focused}
                />
            ) 
          }}
        />

        <Tabs.Screen 
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown:false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name='Bookmark'
                  focused={focused}
                />
            ) 
          }}
        />

        <Tabs.Screen 
          name='create'
          options={{
            title: 'Create',
            headerShown:false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name='Create'
                  focused={focused}
                />
            ) 
          }}
        />

        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            headerShown:false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name='Profile'
                  focused={focused}
                />
            ) 
          }}
        />
      </Tabs>

      
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    width:52,

  }
  
})