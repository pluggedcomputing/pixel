import React, {useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import Lottie from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';
import styles from './styles';

const Congratulations = props => {
  const { navigation } = props;

  const navigateScreen = () => {
    navigation.navigate('LevelSelection');
  };

  useEffect(() => {
    setTimeout(navigateScreen, 3000);
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
      <View style={styles.content}>
        <Text style={styles.textTop}>Você concluiu o nível X</Text>
        <Lottie source={animation} autoPlay loop />
        <Text style={styles.textEnd}>Parabéns</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonAlternative}
        onPress={navigateScreen}
      >
        <Text style={styles.textButton}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Congratulations;