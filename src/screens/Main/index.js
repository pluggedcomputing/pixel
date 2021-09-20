import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';

import logo from '../../assets/images/logo_name.png';
import title from '../../assets/images/pixel.png';
import CustomButton from '../../components/CustomButton/index';
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={logo} style={styles.logo} />
        <Image source={title} style={styles.title} />
        <Text style={styles.text}>
          Colorindo com Números - Representação de Imagens
        </Text>
      </View>
      <View style={styles.containerButtons}>
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
      </View>
    </SafeAreaView>
  );
}

export default Main;
