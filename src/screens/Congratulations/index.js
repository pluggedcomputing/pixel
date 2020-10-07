import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';

import Lottie from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';

const Congratulations = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor
      />
      <View>
        <Text>Você concluiu o nível</Text>
        <Lottie source={animation} autoPlay loop />
      </View>
    </SafeAreaView>
  )
}

export default Congratulations;