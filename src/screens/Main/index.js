import React from 'react';
import {SafeAreaView, StatusBar, Image, Text, View} from 'react-native';

import homeScreen from '../../assets/images/home_screen_image.png';
import CustomButton from '../../components/CustomButton/index';
import colors from "../../styles/colors";
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.colorPrimary}
      />
      <View style={styles.containerHeader}>
        <Image source={homeScreen} style={styles.homeScreen} />
        <Text style={styles.text}>
          COLORINDO COM NÚMEROS
        </Text>
        <Text style={styles.superscriptText}>
          Representação de Imagens
        </Text>
      </View>
      <View style={styles.containerButtons}>
        <CustomButton
          text="iniciar"
          style={styles.buttons}
          onPress={() => navigation.navigate('LevelSelection')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;
