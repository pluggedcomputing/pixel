import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import PaintingTable from '../../../components/PaintingTable';
import {MultipleChoice} from '../../../components/Questions';
import styles from './styles';

const Level2 = ({navigation}) => {
  const [step, setSteps] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const imagens = {
    l2q1: require('../../../assets/images/level2/representationPixel.png'),
    l2q2: require('../../../assets/images/level2/examplePixel.png'),
  };

  const response = {
    level: 2,
    introductions: [
      {
        id: 1,
        text:
          'Voce aprendeu que uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos. Por exemplo, se quisermos exibir a letra C, primeiro precisamos dividir a letra em quadrados.',
        img: null,
      },
      {
        id: 2,
        text:
          ' Se ampliarmos mais e mais na letra, podemos ver uma grade de pixels semelhante a estes:',
        img: 'l2q1',
      },
      {
        id: 3,
        text:
          'Podemos representar essa imagem usando dígitos binários (bits). Se 1 indica um quadrado branco e um 0 indica um quadrado preto, então podemos representar nossa letra C, em uma grade de 5x6 pixels, assim:',
        img: 'l2q2',
      },
    ],
    questions: [
      {
        type: '',
        description:
          'Agora vamos praticar, pinte a imagem que os números formam',
        paintContent: ['1, 3, 1', '2, 1, 2', '1, 3, 1', '2, 1, 2', '1, 3, 1'],
        alternatives: [
          {
            id: '1',
            text: 'l',
            correct: false,
          },
          {
            id: '2',
            text: 't',
            correct: false,
          },
          {
            id: '3',
            text: 'c',
            correct: true,
          },
          {
            id: '4',
            text: 'p',
            correct: false,
          },
        ],
      },
      {
        type: '',
        description:
          'Vamos ver se você consegui entender como funcionas os pixels, qual letra do alfabeto os números formam?',
        paintContent: ['1, 3, 1', '2, 1, 2', '1, 3, 1', '2, 1, 2', '1, 3, 1'],
        alternatives: [
          {
            id: '1',
            text: 'm',
            correct: false,
          },
          {
            id: '2',
            text: 'g',
            correct: false,
          },
          {
            id: '3',
            text: 'w',
            correct: true,
          },
          {
            id: '4',
            text: 'q',
            correct: false,
          },
        ],
      },
    ],
  };

  const [exercise] = useState(response);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: exercise.level,
        content: ['Parabéns por completar o nível'],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewOfContent = () => {
    const content = exercise.introductions.map((item) => (
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{item.text}</Text>
        {item.img ? (
          <Image style={styles.img} source={imagens[item.img]} />
        ) : null}
      </View>
    ));

    content.push(
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{question.description}</Text>
        <PaintingTable content={question.paintContent} enable size={5} />
      </View>,
    );
    return content;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <BoxBackground
          content={viewOfContent()}
          style={styles.boxContainer}
          isLastPage={setIsLastPage}
        />
      </View>
      <View style={styles.containerBody}>
        {!isLastPage ? (
          <Text style={styles.defaultText}>
            Leia atentamente cada questão para que possa responder o que é
            solicitado em cada exercício. Arraste o card para o lado e verá as
            próximas instruções.
          </Text>
        ) : (
          <>
            <Text style={styles.textAnswer}> Selecione a opção correta</Text>
            <View style={styles.contentContainerStyle}>
              <MultipleChoice
                step={step}
                setSteps={setSteps}
                alternatives={question.alternatives}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Level2;
