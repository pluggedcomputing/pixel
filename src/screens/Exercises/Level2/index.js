import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import BoxAlternative from "../../../components/BoxAlternative";
import BoxBackground from '../../../components/BoxBackground';
import PaintingTable from '../../../components/PaintingTable';
import {MultipleChoice} from '../../../components/Questions';
import styles from './styles';

const Level2 = ({navigation}) => {
  const [step, setSteps] = useState(0);
  const imagens = {
    l2q1: require('../../../assets/images/level2/representationPixel.png'),
    l2q2: require('../../../assets/images/level2/examplePixel.png'),
  };

const responseAll = {
  level: 1,
  questions: [
    {
      type: 'INTRO',
      id: 1,
      text:
          'Você aprendeu que para armazenar uma imagem em preto e branco o computador apenas precisa armazenar quais pixels são pretos e quais são brancos. Por exemplo, se quisermos exibir uma imagem correspondente à letra "C", precisamos pensar na tela como uma grade com vários quadrados pretos ou brancos.',
        img: null,
      enableScroll: true,
    },
    {
      type: 'INTRO',
      id: 2,
      text:
          'Ao observarmos uma tela exibindo a letra C e ampliarmos mais e mais, podemos ver uma grade de pixels semelhantes a estas:',
        img: 'l2q1',
      enableScroll: true,
    },
    {
      id: 3,
      type: 'QUEST',
      invisibleRow: -1,
      enable: true,
      description:
        'Agora vamos praticar, pinte a imagem representada pelos códigos abaixo, lembrando que 1 é branco e 0 é preto.',
      enableScroll: false,
      paintContent: [
        '1, 0, 0, 0, 0',
        '1, 0, 1, 1, 0',
        '1, 0, 0, 0, 0',
        '1, 0, 1, 1, 1',
        '1, 0, 1, 1, 1',
        '1, 0, 1, 1, 1',
      ],
      alternatives: [
        {
          id: '1',
          text: 'L',
          correct: false,
        },
        {
          id: '2',
          text: 'T',
          correct: false,
        },
        {
          id: '3',
          text: 'C',
          correct: false,
        },
        {
          id: '4',
          text: 'P',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      type: 'QUEST',
      enable: true,
      invisibleRow: -1,
      description:
      'Vamos ver se você consegue entender sobre a representação de imagens com pixels. Pinte os quadrados correspondentes aos códigos binários indicados e escolha a letra que será exibida dentre as opções apresentadas',
      enableScroll: false,
      paintContent: [
      '1, 0, 0, 0, 1',
      '0, 1, 1, 1, 1',
      '0, 1, 1, 1, 1',
      '0, 1, 0, 0, 1',
      '0, 1, 1, 0, 1',
      '1, 0, 0, 0, 1',
    ],
    alternatives: [
      {
        id: '1',
        text: 'M',
        correct: false,
      },
      {
        id: '2',
        text: 'G',
        correct: true,
      },
      {
        id: '3',
        text: 'W',
        correct: false,
      },
      {
        id: '4',
        text: 'Q',
        correct: false,
      },
    ],
    },
    {
      id: 5,
      type: 'QUEST',
      enable: false,
      invisibleRow: 4,
      description:
          'Agora tente descobrir qual é a linha que está faltando para completar o desenho da letra W?',
          enableScroll: false,
          paintContent: [
          '1, 1, 1, 1, 1',
          '0, 1, 1, 1, 0',
          '0, 1, 1, 1, 0',
          '0, 1, 0, 1, 0',
          '0, 0, 1, 0, 0',
          '0, 1, 1, 1, 0',
        ],

        alternatives: [
          {
            id: '1',
            text: '1, 1, 1, 0, 1',
            correct: false,
          },
          {
            id: '2',
            text: '1, 1, 0, 0, 1',
            correct: false,
          },
          {
            id: '3',
            text: '1, 1, 0, 1, 0',
            correct: false,
          },
          {
            id: '4',
            text: '0, 0, 1, 0, 0',
            correct: true,
          },
        ],
    },
  ]
};

  const [exercise] = useState(responseAll);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: exercise.level,
        content: [
          'Você agora entende o funcionamento básico da representação de imagens no computador',
          'Você sabe codificar uma imagem a ser exibida em uma tela utilizando apenas 0 e 1'
        ],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewOfContent = () => {
    const content = exercise.questions.map((item) => (
      item.type === "INTRO" ? (
        <View style={styles.containerOfContent}>
          <Text style={styles.contentText}>{item.text}</Text>
          {item.img ? (
            <Image style={styles.img} source={imagens[item.img]} />
        ) : null}
        </View>
    ) : (
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{item.description}</Text>
        <PaintingTable
          content={item.paintContent}
          enable={item.enable}
          isContentReduced={false}
          row={6}
          column={5}
          invisibleRow={item.invisibleRow}
      />
      </View>
    )
    ));
    return content;
  };

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if(isCorrect){
      exercise.questions[step].enableScroll = isCorrect;
      setNextCard(true);
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <BoxBackground
          content={viewOfContent()}
          style={styles.boxContainer}
          setSteps={setSteps}
          scrollEnabled={question.enableScroll}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
        />
      </View>
      <BoxAlternative
        alternativesContent={(
          question.type === 'QUEST' ?  (
            <>
              <Text style={styles.textAnswer}> Selecione a opção correta</Text>
              <View style={styles.contentContainerStyle}>
                <MultipleChoice
                  step={step}
                  setSteps={setSteps}
                  isAnswer={question.enableScroll}
                  alternatives={question.alternatives}
                  setCorrectAnswer={setAnswerCorrectInQuestion}
            />
              </View>
            </>
          ) : null)}
        isLastPage={(question.type !== 'QUEST')}
        textInfor="Arraste o card acima para o lado para continuar." />
    </View>
  );
};

export default Level2;
