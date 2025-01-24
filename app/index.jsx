import { ScrollView, View, Image, Text, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

import CustomButton from '../components/CustomButton'
import { homePageStyle } from '../styles/homepageStyle/styles'
import { images } from '../constants'

export default function App(){
  return (
    <SafeAreaView style={homePageStyle.appMainContainer}>
      <ScrollView contentContainerStyle={{height : '100%'}}>

        <View style={homePageStyle.appContainer}>
          <Image source={images.logo} style={homePageStyle.logoStyle} resizeMode='contain'/>
          <Image source={images.cards} style={homePageStyle.cardsStyle} resizeMode='contain'/>

          <View style={homePageStyle.test}>
            <Text style={homePageStyle.textSyle}>Discover Endless possibilities with 
              <Text style={homePageStyle.textAoraStyle}> Aora</Text>
            </Text>
            <Image source={images.path} style={homePageStyle.styleDeco} resizeMode='contain'/>
          </View>

          <Text style={homePageStyle.textPresentation}>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
          
          <CustomButton
           title='Continue with Email'
           handlePress={() => router.push('/sign-in')}
           containerStyle={{width: '100%', marginTop : 28}}/>

        </View>

      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}

