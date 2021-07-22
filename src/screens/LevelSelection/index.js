import React from 'react';
import {View, SafeAreaView, Image, ScrollView, StatusBar} from 'react-native';

import data from '../../assets/data.json';
import level1 from '../../assets/images/levelSelection/level1.png';
import level2 from '../../assets/images/levelSelection/level2.png';
import level3 from '../../assets/images/levelSelection/level3.png';
import level4 from '../../assets/images/levelSelection/level4.png';
import imagePixel from '../../assets/images/tank_blue.png';
import CardLevel from '../../components/CardLevel';
import {colors} from '../../styles';
import styles from './styles';

const LevelSelection = ({navigation}) => {
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
            onPress={() =>
              navigation.navigate('Exercises', {data: data.exercises[0]})}
          />

          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '90deg'}]}]}
          />

          <CardLevel
            level="3"
            image={level3}
            available
            onPress={() =>
              navigation.navigate('Exercises', {data: data.exercises[2]})}
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
            available
            onPress={() =>
              navigation.navigate('Exercises', {data: data.exercises[1]})}
          />
          <Image
            source={imagePixel}
            style={[styles.imagePixel, {transform: [{rotate: '-90deg'}]}]}
          />
          <CardLevel
            level="4"
            image={level4}
            available
            onPress={() =>
              navigation.navigate('Exercises', {data: data.exercises[3]})}
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
