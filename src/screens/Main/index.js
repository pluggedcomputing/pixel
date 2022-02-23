import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';

import homeScreen from '../../assets/images/home_screen_image.png';
import CustomButton from '../../components/CustomButton/index';
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={homeScreen} style={styles.homeScreen} />
        <Text style={styles.text}>
          COLORINDO COM NÚMEROS
        </Text>
        <Text style={styles.text}>
          REPRESENTAÇÃO DE IMAGENS
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
