import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';

import BoxBackground from '../../../components/BoxBackground';
import PaintingTable from '../../../components/PaintingTable';
import {MultipleChoice} from '../../../components/Questions';
import {colors} from '../../../styles';
import styles from './styles';

const Level3 = ({navigation}) => {
  const [step, setSteps] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const response = {
    level: 2,
    introductions: [
      {
        id: 1,
        text:
          'Você aprendeu que podemos representar uma imagem através de  pontos pretos e brancos, representados por 0 e 1, respectivamente. Podemos, porém, utilizar também uma representação mais reduzida e que gaste menos memória e menos tempo de transmissão.',
        img: null,
      },
      {
        id: 2,
        text:
          'Para armazenar uma imagem no computador economizando espaço, basta armazenar quais pontos são pretos e quais pontos são brancos. Vamos aprender como isso funciona!',
        img: null,
      },
    ],
    questions: [
      {
        type: '',
        enable: true,
        invisibleRow: -1,
        description:
          'Veja abaixo como representar a letra T. A primeira linha consiste de 0 pixels brancos, seguidos de 5 pixels pretos e as linhas seguintes de dois pixels brancos, 1 preto e 2 brancos.',

        paintContent: [
          '0, 5',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
        ],
        alternatives: [
          {
            id: '1',
            text: 'Próximo',
            correct: true,
          },
        ],
      },
      {
        type: '',
        enable: true,
        invisibleRow: -1,
        description:
          'Que letra está sendo representada no código abaixo? Você pode pintar os quadrados na cor preta ou branca clicando neles.',
        paintContent: [
          '1, 1, 3',
          '1, 1, 3',
          '1, 1, 3',
          '1, 1, 3',
          '1, 1, 3',
          '1, 3, 1',
        ],
        alternatives: [
          {
            id: '1',
            text: 'I',
            correct: false,
          },
          {
            id: '2',
            text: 'J',
            correct: false,
          },
          {
            id: '3',
            text: 'L',
            correct: true,
          },
          {
            id: '4',
            text: 'K',
            correct: false,
          },
        ],
      },
      {
        type: '',
        enable: true,
        invisibleRow: -1,
        description:
          'Que letra está sendo representada no código abaixo? Você pode pintar os quadrados na cor preta ou branca clicando neles.',
        paintContent: [
          '5',
          '0, 1, 2, 1, 1',
          '0, 1, 1, 1, 2',
          '0, 2, 3',
          '0, 1, 1, 1, 2',
          '0, 1, 2, 1, 1',
        ],

        alternatives: [
          {
            id: '1',
            text: 'K',
            correct: true,
          },
          {
            id: '2',
            text: 'L',
            correct: false,
          },
          {
            id: '3',
            text: 'J',
            correct: false,
          },
          {
            id: '4',
            text: 'I',
            correct: false,
          },
        ],
      },
      {
        type: '',
        enable: false,
        invisibleRow: 4,
        description:
          'Como você representaria a penúltima linha da imagem abaixo?',
        paintContent: [
          '1, 3, 1',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
          '0, 1, 1, 1, 2',
          '0, 3, 2',
        ],

        alternatives: [
          {
            id: '1',
            text: '1, 1, 1, 2',
            correct: false,
          },
          {
            id: '2',
            text: '0, 1, 1, 1, 2',
            correct: true,
          },
          {
            id: '3',
            text: '0, 2, 1, 2',
            correct: false,
          },
          {
            id: '4',
            text: '0, 1, 2, 1, 1',
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
        content: [
          'Parabéns por completar o nível',
          'Entende como uma imagem criada por você pode ser representada com números',
        ],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewOfContent = () => {
    const content = exercise.introductions.map((item) => (
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{item.text}</Text>
      </View>
    ));
    content.push(
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{question.description}</Text>
        <PaintingTable
          content={question.paintContent}
          isContentReduced
          enable={question.enable}
          row={6}
          column={5}
          invisibleRow={question.invisibleRow}
        />
      </View>,
    );
    return content;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewOfContent()}
          style={styles.boxContainer}
          isLastPage={setIsLastPage}
        />
      </View>
      <View style={styles.halfBottomView}>
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

export default Level3;
