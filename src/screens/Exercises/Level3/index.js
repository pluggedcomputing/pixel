import React from 'react';
import {StatusBar, View, Text, FlatList} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import PaintingTable from '../../../components/PaintingTable';
import {colors} from '../../../styles';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: 'Planelta',
    correct: false,
  },
  {
    id: '2',
    title: 'Rosto',
    correct: false,
  },
  {
    id: '3',
    title: 'Xícara',
    correct: true,
  },
  {
    id: '4',
    title: 'Coração',
    correct: false,
  },
];

const Level3 = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.contentContainerStyle}>
      <ChoiceButton
        style={styles.buttons}
        text={item.title}
        correct={item.correct}
        onPress={() =>
          item.correct &&
          navigation.navigate('Congratulations', {
            level: 3,
            content: [
              'Entende como uma imagem criada por você pode ser representada com números binários.',
            ],
          })}
        step={1}
      />
    </View>
  );
  const BoxBackgroundContent = () => {
    const content = [
      <View style={styles.viewBoxContent}>
        <Text style={styles.textBoxContent}>
          Pinte os quadrados de acordo com a numeração de cada linha
        </Text>
        <View style={{flexDirection: 'row'}}>
          <PaintingTable content={[]} size={8} />
          <View>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,0,0</Text>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,1,1</Text>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,0,1</Text>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,1,1</Text>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,0,0</Text>
            <Text style={styles.textBoxContent}>0,1,1,1,1,0,0,0</Text>
            <Text style={styles.textBoxContent}>0,0,1,1,0,0,0,0</Text>
            <Text style={styles.textBoxContent}>1,1,1,1,1,1,1,1</Text>
          </View>
        </View>
      </View>,
    ];
    return content;
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      <View style={styles.halfTopView}>
        <BoxBackground content={BoxBackgroundContent()} />
      </View>
      <View style={styles.halfBottomView}>
        <Text style={styles.textAnswer}> Selecione a opção correta</Text>
        <FlatList
          style={styles.buttonsContainer}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Level3;
