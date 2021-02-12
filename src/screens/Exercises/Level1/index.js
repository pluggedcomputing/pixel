import React, {useState, useEffect} from 'react';
import {View, Image, StatusBar, Text, FlatList} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import {colors} from '../../../styles';
import styles from './styles';

const DATA = [
  {
    id: '001',
    key: 'a',
    title: [
      {
        id: '1',
        text:
          'Você sabia que os computadores armazenam desenhos, fotografias e outras imagens usando apenas números? Nos desafios propostos a seguir entenderemos melhor como isso acontece.',
        img: null,
      },
      {
        id: '2',
        text:
          'Você sabia que as telas dos computadores são divididas em uma grade de pequenos pontos chamados pixels? Em uma foto preto e branco, cada pixel ou é preto ou é branco.',
        img: require('../../../assets/images/img_pixel.png'),
      },
      {
        id: '3',
        text:
          'Você já viu um aparelho de fac-símile (fax)? Esse aparelho era muito utilizado antigamente para o envio de documentos em preto e branco. Como você acha que eram enviadas estas mensagens?',
        img: require('../../../assets/images/fax.png'),
      },
    ],
    alternatives: [
      {
        id: '1',
        title: ' Representando pontos pretos com 0 e brancos com 1',
        correct: false,
      },
      {
        id: '2',
        title:
          'Utilizando uma representação que economize a quantidade de dados enviados',
        correct: true,
      },
    ],
  },
  {
    id: '002',
    key: 'b',
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
  {
    id: '003',
    key: 'c',
    title: [
      {
        id: '1',
        text:
          'Uma máquina de fax é basicamente um computador simples que efetua uma varredura sobre uma página em preto e branco, armazena- a em, aproximadamente, 1000 × 2000 pixels. Depois são transmitidos através de um modem para outra máquina de fax.',
        img: null,
      },
      {
        id: '2',
        text: 'Esta última, por sua vez, imprime os pixels em uma página.',
        img: require('../../../assets/images/Level1/fax.png'),
      },
      {
        id: '3',
        text:
          'Para economizar no armazenamento e transmissão de dados, é mais interessante utilizar uma representação dos dados que economize a quantidade de informação transmitida ou armazenada.',
        img: null,
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
  {
    id: '004',
    key: 'e',
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
        title: 'Realiza operações matemáticas',
        correct: false,
      },
      {
        id: '2',
        title: 'Gera cópias de imagens ',
        correct: false,
      },
      {
        id: '3',
        title: 'É usada para redimensionar pixels',
        correct: false,
      },
      {
        id: '4',
        title: 'Imprime pixels',
        correct: true,
      },
    ],
  },
  {
    id: '005',
    key: 'f',
    title: [
      {
        id: '1',
        text:
          'Como funciona o armazenamento das imagens no computador? Sabendo que a linguagem que o computador interpreta são números.',
        img: null,
      },
    ],
    alternatives: [
      {
        id: '1',
        title: 'É armazenada por números decimais',
        correct: false,
      },
      {
        id: '2',
        title: 'Os números tem que possuir uma sequência exata',
        correct: false,
      },
      {
        id: '3',
        title: 'Por meio de números binários',
        correct: true,
      },
      {
        id: '4',
        title: 'Por meio de números hexadecimais',
        correct: false,
      },
    ],
  },
];

const Level1 = ({navigation}) => {
  const [step, setSteps] = useState(0);
  const [data, setData] = useState(DATA[0]);
  const [isLastPage, setIsLastPage] = useState(false);
  const maxStep = DATA.length;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 1,
        content: [
          'Entende o funcionamento do fax',
          'Entende como uma imagem criada por você pode ser representada com números binários.',
          'Entende a necessidade de utilizar menos dados para representar imagens e documentos',
        ],
      });
    } else {
      setData(DATA[step]);
      setIsLastPage(false);
    }
  }, [step]);

  const renderItem = ({item}) => (
    <View style={styles.contentContainerStyle}>
      <ChoiceButton
        style={styles.buttons}
        step={step}
        text={item.title}
        correct={item.correct}
        onPress={() => {
          if (item.correct) {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );

  const viewContent = () => {
    return data.title.map((item) => (
      <View style={styles.viewBoxContent}>
        <Text style={styles.textBoxContent}>{item.text}</Text>
        <Image style={styles.statementImage} source={item.img} />
      </View>
    ));
  };

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          isLastPage={setIsLastPage}
          content={viewContent()}
          updatePage={step}
        />
      </View>
      <View style={styles.halfBottomView}>
        {!isLastPage && data.title.length > 1 ? (
          <Text style={styles.defaultText}>
            Leia atentamente cada questão para que possa responder o que é
            solicitado em cada exercício. Arraste o card para o lado e verá as
            próximas instruções.
          </Text>
        ) : (
          <View>
            {data.alternatives.length > 1 ? (
              <Text style={styles.textAnswer}> Selecione a opção correta</Text>
            ) : null}
            <FlatList
              style={styles.buttonsContainer}
              data={data.alternatives}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      {BoxContent()}
    </View>
  );
};

export default Level1;
