import React, {useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useRoute} from '@react-navigation/native';
import Animation from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';
import { colors } from '../../styles'
import styles from './styles';


const Congratulations = props => {
  const { level, content } = useRoute().params

  const { navigation } = props;

  const navigateScreen = () => {
    navigation.navigate('LevelSelection');
  };

  useEffect(() => {
    setTimeout(navigateScreen, 3000);
  },[]);

  const showInformation = () => {
    return content.map((item, index) => {
      return(
        <View key={[index]} style={styles.information}>
          <Icon name="check-circle-o" size={30} color={colors.colorSucess} />
          <Text style={styles.textInformation}>{item}</Text>
        </View>
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
      <View style={styles.content}>
        <Text style={styles.textTop}>Parabéns</Text>
        <Text style={styles.textEnd}>Você concluiu o nível {level}</Text>
        <Animation source={animation} style={styles.animation} autoPlay loop />
        <ScrollView>
          {showInformation()}
        </ScrollView>
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