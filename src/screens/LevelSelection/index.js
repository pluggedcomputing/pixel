import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import data from '../../assets/data.json';
import level1 from '../../assets/images/levelSelection/fase1.png';
import level2 from '../../assets/images/levelSelection/fase2.png';
import level3 from '../../assets/images/levelSelection/fase3.png';
import level4 from '../../assets/images/levelSelection/fase4.png';
import CardLevel from '../../components/CardLevel';
import {colors} from '../../styles';
import styles from './styles';


const LevelSelection = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.colorSecondaryLight}
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
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="2"
            image={level2}
            available
            onPress={() =>
              navigation.navigate('Exercises', {data: data.exercises[1]})}
          />
        </View>
        <View>
          <View style={styles.boxContainer}>
            <CardLevel
              level="3"
              image={level3}
              available
              onPress={() =>
                navigation.navigate('Exercises', {data: data.exercises[2]})}
            />
          </View>
          <View style={styles.boxContainer}>
            <CardLevel
              level="4"
              image={level4}
              available
              onPress={() =>
                navigation.navigate('Exercises', {data: data.exercises[3]})}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default LevelSelection;