import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import level1 from '../../assets/images/levelSelection/level1.png';
import level2 from '../../assets/images/levelSelection/level2.png';
import level3 from '../../assets/images/levelSelection/level3.png';
import level4 from '../../assets/images/levelSelection/level4.png';
import imagePixel from '../../assets/images/tank_blue.png';
import CardLevel from '../../components/CardLevel';
import {colors} from '../../styles';
import styles from './styles';

const LevelSelection = ({navigation}) => {
  const [levelsAvailable, setLevelsAvailable] = useState({});

  const getData = async () => {
    try {
      const levels = {
        level2: JSON.parse(await AsyncStorage.getItem('level2')),
        level3: JSON.parse(await AsyncStorage.getItem('level3')),
        level4: JSON.parse(await AsyncStorage.getItem('level4')),
      };
      if (!levels) {
        await Promise.all([
          AsyncStorage.setItem('level2', 'false'),
          AsyncStorage.setItem('level3', 'false'),
          AsyncStorage.setItem('level4', 'false'),
        ]);
      }
      setLevelsAvailable(levels);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possivel carregar o seu nível atual');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.boxContainer}>
          <CardLevel
            level="1"
            image={level1}
            available
            onPress={() => navigation.navigate('Level1')}
          />

          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '90deg'}]}]}
          />

          <CardLevel
            level="3"
            image={level3}
            available
            onPress={() => navigation.navigate('Level3')}
          />
          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '180deg'}]}]}
          />
          <Image source={imagePixel} style={styles.imagePixel} />
        </View>
        <View style={styles.boxContainer}>
          <Image source={imagePixel} style={styles.imagePixel} />
          <CardLevel
            level="2"
            image={level2}
            available={levelsAvailable.level2}
            onPress={() => navigation.navigate('Exercises')}
          />
          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '-90deg'}]}]}
          />
          <CardLevel
            level="4"
            image={level4}
            available={levelsAvailable.level4}
            onPress={() => navigation.navigate('Exercises')}
          />
          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '180deg'}]}]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LevelSelection;
