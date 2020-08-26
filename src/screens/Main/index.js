import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import logo from '../../assets/imagens/logo_name.png';
import CustomButton from '../../components/CustomButton/index';
import styles from './styles';

function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Colorindo com Números</Text>
      <CustomButton
        text="iniciar"
        style={styles.buttons}
        onPress={() => console.log('clicou inicio')}
      />
      <CustomButton
        text="sobre"
        style={styles.buttons}
        onPress={() => console.log('clicou sobre')}
      />
    </SafeAreaView>
  );
}

export default Main;
