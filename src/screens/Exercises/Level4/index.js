import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import { colors } from '../../../styles';
import styles from './styles';

const DATA1 = [
  {
    id: '1',
    title: [
      {
        id: '1',
        text:
          'Estes exercicios cobriram apenas imagens em preto e branco. Podemos fazer mais de duas cores com esta atividade?',
      },
      {
        id: '2',
        text: 'Com um dígito binário, podemos representar apenas dois valores diferentes. Isso significa que se usarmos um dígito para representar a cor de um pixel, cada pixel pode ser apenas uma de duas cores diferentes.',
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Próximo',
        correct: true,
      },
    ],
  },
];

const DATA2 = [
  {
    id: '2',
    title: [
      {
        id: '1',
        text: 'O que poderíamos fazer para representar mais cores?',
      },
      {
        id: '2',
        text: 'Se quisermos que cada pixel seja capaz de mostrar mais cores além do preto e branco, precisamos usar mais números (ou seja, mais dígitos binários) para representar a cor de cada pixel.',
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Próximo',
        correct: true,
      },
    ],
  },
];

const Level4 = ({ navigation }) => {
  const [step, setSteps] = useState(0);
  const [data, setData] = useState(DATA1);

  const dataContent = [DATA1, DATA2];
  const maxStep = dataContent.length;
  const finishLevel = step === maxStep;
  const getData = (type) => dataContent[type];

  const renderItem = ({ item }) => (
    <View style={styles.contentContainerStyle}>
      <ChoiceButton
        style={styles.buttons}
        step={step}
        text={item.title}
        correct={item.correct}
        onPress={() => {
          if (item.correct) {
            setSteps(step + 1)
          }
        }}
      />
    </View>
  );

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          content={data[0].title.map((item) => (
            <View style={styles.viewBoxContent}>
              <Text style={styles.textBoxContent}>{item.text}</Text>
            </View>
          ))}
        />
      </View>
      <View style={styles.halfBottomView}>
        <View>
          <Text style={styles.textAnswer}> Selecione a opção correta</Text>
          <FlatList
            style={styles.buttonsContainer}
            data={data[0].alternatives}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 4,
        content: [
          'Entende como uma imagem criada por você pode ser representada com números binários.',
        ],
      });
    } else {
      setData(getData(step))
    }
  }, [step]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      <BoxContent />
    </View>
  );
};

export default Level4;
