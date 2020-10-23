import React ,{useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useRoute} from '@react-navigation/native';
import {PropTypes} from 'prop-types';

import { colors } from '../../styles'
import styles from './styles';


const Congratulations = props => {
  const { level } = useRoute().params

  const { navigation, content } = props;

  const navigateScreen = () => {
    navigation.navigate('LevelSelection');
  };

   useEffect(() => {
    setTimeout(navigateScreen, 3000);
  },[]);

  const showInformation = () => {
    content.map((item) => {
      return(
        <View style={styles.information}>
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
        <Text style={styles.textTop}>Você concluiu o nível {level}</Text>
        {showInformation}
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

Congratulations.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Congratulations;