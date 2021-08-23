import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useRoute} from '@react-navigation/native';
import Animation from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';
import {colors} from '../../styles';
import styles from './styles';

const Congratulations = (props) => {
  const {level, content} = useRoute().params;

  const {navigation} = props;

  const navigateScreen = () => {
    navigation.navigate('LevelSelection');
  };

  const showInformation = () => {
    return content.map((item, index) => {
      return (
        <View key={[index]} style={styles.information}>
          <Icon name="check-circle-o" size={30} color={colors.colorSucess} />
          <Text style={styles.textInformation}>{item}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
      <View style={styles.content}>
        <Text style={styles.textTop}>Parabéns</Text>
        <Text style={styles.textEnd}>Você concluiu o nível {level}</Text>
        <ScrollView>
          <Animation
            source={animation}
            style={styles.animation}
            autoPlay
            loop
          />
          {showInformation()}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.buttonAlternative}
        onPress={navigateScreen}>
        <Text style={styles.textButton}>Finalizar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Congratulations;
