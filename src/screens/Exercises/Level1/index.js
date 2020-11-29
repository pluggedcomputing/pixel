import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text, FlatList } from 'react-native';

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
          'As telas dos computadores são divididas em uma grade de pequenos quadrados, cada um dos quais pode exibir uma cor. Chamamos esses quadrados de elementos de imagem ou pixels.',
        img: null,
      },
      {
        id: '2',
        text:
          ' Em uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos.',
        img: null,
      },
      {
        id: '3',
        text:
          'Por exemplo, se quisermos exibir a letra C, primeiro precisamos dividir a letra em quadrados. Se ampliarmos mais e mais na letra, podemos ver uma grade de pixels semelhante a estes:',
        img: require('../../../assets/images/Level1/Cgrade.png'),
      },
      {
        id: '4',
        text:
          'Podemos representar essa imagem usando dígitos binários (bits). Se 1 indica um quadrado branco e um 0 indica um quadrado preto, então podemos representar nossa letra C, em uma grade de 5x6 pixels, assim:',
        img: require('../../../assets/images/Level1/binar.png'),
      },
      {
        id: '5',
        text:
          'Se pegarmos esses números e desenharmos a imagem que eles representam, obteremos a letra C:',
        img: require('../../../assets/images/Level1/Cpixelbin.png'),
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
        text:
          'Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena- a em, aproximadamente, 1000 × 2000pixels. E são transmitidos através de um modem para outra máquina de fax.',
        img: null,
      },
      {
        id: '2',
        text: 'Esta última, por sua vez, imprime os pixels em uma página.',
        img: require('../../../assets/images/Level1/fax.png'),
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

const DATA3 = [
  {
    id: '3',
    title: [
      {
        id: '1',
        text: 'Em quais situações os computadores precisam armazenar imagens?',
        img: null,
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Programa de desenhar',
        correct: true,
      },
      {
        id: '2',
        title: 'Jogo com gráficos',
        correct: true,
      },
      {
        id: '3',
        title: 'Cálculo de números',
        correct: false,
      },
      {
        id: '4',
        title: 'No bloco de notas',
        correct: false,
      },
    ],
  },
];
const DATA4 = [
  {
    id: '4',
    title: [
      {
        id: '1',
        text: 'O que as máquinas de fac-símile (fax) fazem ?',
        img: null,
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Envia vídeos',
        correct: false,
      },
      {
        id: '2',
        title: 'Realiza contagens',
        correct: false,
      },
      {
        id: '3',
        title: 'Sortea um número',
        correct: false,
      },
      {
        id: '4',
        title: 'Imprime pixels',
        correct: true,
      },
    ],
  },
];

const DATA5 = [
  {
    id: '5',
    title: [
      {
        id: '1',
        text:
          'Como os computadores armazenam imagens se armazenam todas as informações como dígitos?',
        img: null,
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'Código morse',
        correct: false,
      },
      {
        id: '2',
        title: 'Regex',
        correct: false,
      },
      {
        id: '3',
        title: 'Digitos bínarios',
        correct: true,
      },
      {
        id: '4',
        title: 'ábaco',
        correct: false,
      },
    ],
  },
];

const Level1 = ({ navigation }) => {
  const [step, setSteps] = useState(0);
  const [data, setData] = useState(DATA1);

  const renderItem = ({ item }) => (
    <View style={styles.contentContainerStyle}>
      <ChoiceButton
        style={styles.buttons}
        step={step}
        text={item.title}
        correct={item.correct}
        onPress={() => {
          if (item.correct) setSteps(step + 1);
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
              <Image style={styles.statementImage} source={item.img} />
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

  const dataContent = [DATA1, DATA2, DATA3, DATA4, DATA5];
  const maxStep = 4;
  const finishLevel = step === maxStep;
  const getData = (type) => dataContent[type];

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1,
        content: [
          'Entende como uma imagem criada por você pode ser representada com números binários.',
        ],
      });
    } else {
      setData(getData(step));
    }
  }, [step]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      <BoxContent />
    </View>
  );
};

export default Level1;