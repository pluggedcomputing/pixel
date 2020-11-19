import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import { colors } from '../../../styles';
import styles from './styles';

const DATA = [
  {
    id: '1',
    title: [
      {
        text: "As telas dos computadores são divididas em uma grade de pequenos quadrados, cada um dos quais pode exibir uma cor. Chamamos esses quadrados de elementos de imagem ou pixels.",
        img: null
      },
      {
        text: " Em uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos.",
        img: null
      },
      {
        text: "Por exemplo, se quisermos exibir a letra C , primeiro precisamos dividir a letra em quadrados. Se ampliarmos mais e mais na letra, podemos ver uma grade de pixels semelhante a estes:",
        img: require('../../../assets/images/Level1/Cgrade.png'),
      },
      {
        text: "Podemos representar essa imagem usando dígitos binários (bits). Se 1 indica um quadrado branco e um 0 indica um quadrado preto, então podemos representar nossa letra C , em uma grade de 5x6 pixels, assim:",
        img: require('../../../assets/images/Level1/binar.png'),
      },
      {
        text: "Se pegarmos esses números e desenharmos a imagem que eles representam, obteremos a letra C :",
        img: require('../../../assets/images/Level1/Cpixelbin.png'),
      }
    ],
    alternatives: [
      {
        id: '1',
        title: 'Próximo',
        correct: true,
      }
    ]
  },
  {
    id: '2',
    title: [
      {
        text: "Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena- a em, aproximadamente, 1000 × 2000pixels. E são transmitidos através de um modem para outra máquina de fax.",
        img: null
      },
      {
        text: " Esta última,por sua vez, imprime os pixels em uma página.",
        img: require('../../../assets/images/Level1/fax.png')
      }
    ],
    alternatives: [
      {
        id: '1',
        title: 'Próximo',
        correct: true,
      }
    ]
  },
  {
    id: '3',
    title: [
      {
        text: 'Em quais situações os computadores precisam armazenar imagens ?',
        img: null
      }
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
    ]
  },
  {
    id: '4',
    title: [
      {
        text: 'O que as máquinas de fac-símile (fax) fazem ?',
        img: null
      }
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
    ]
  },
  {
    id: '5',
    title: [
      {
        text: 'Como os computadores armazenam imagens se armazenam todas as informações como dígitos?',
        img: null
      }
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
    ]
  },
]


const Level1 = ({ navigation }) => {

  const [step, setSteps] = useState(0);
  const [question, setQuestion] = useState(DATA[step]);

  const maxStep = DATA.length;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1, content: [
          'Entende como uma imagem criada por você pode ser representada com números binários.',
        ],
      });
    } else {
      setQuestion(DATA[step])
    }
  }, [step])

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
  const BoxBackgroundContent = () => {
    const content = question.title.map(item => (
      <View style={styles.viewBoxContent}>
        <Text style={styles.contentText}>{item.text}</Text>
        <Image style={styles.statementImage} source={item.img} />
      </View>
    ))
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
          data={question.alternatives}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Level1;