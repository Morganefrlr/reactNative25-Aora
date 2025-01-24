
import { Tabs } from 'expo-router'
import {  tabsConfig } from '../../utils/tabsConfig'
import TabIcon from '../../components/TabIcon'



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
      }}>
      
        
        {tabsConfig.map(tab => 
          <Tabs.Screen 
            name={tab.name}
            options={{
              title: tab.title,
              headerShown:false,
              tabBarIcon: ({color, focused}) => (
                <TabIcon icon={tab.icon} color={color} name={tab.title} focused={focused}/>
            )}} 
          />
        )}


      </Tabs>

      
    </>
  )
}

export default TabsLayout

