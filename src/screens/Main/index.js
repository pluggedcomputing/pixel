import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import logo from '../../assets/images/logo_name.png';
import CustomButton from '../../components/CustomButton/index';
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Colorindo com Números</Text>
      <CustomButton
        text="iniciar"
        style={styles.buttons}
        onPress={() => navigation.navigate('LevelSelection')}
      />
      <CustomButton
        text="sobre"
        style={styles.buttons}
        onPress={() => navigation.navigate('ScreenAbout')}
      />
    </SafeAreaView>
  );
}

export default Main;
