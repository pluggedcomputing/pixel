import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';

import BoxAlternative from '../../../components/BoxAlternative';
import BoxBackground from '../../../components/BoxBackground';
import PaintingTable from '../../../components/PaintingTable';
import {MultipleChoice} from '../../../components/Questions';
import {colors} from '../../../styles';
import styles from './styles';

const Level3 = ({navigation}) => {
  const responseAll = {
    level: 3,
    questions: [
      {
        type: 'INTRO',
        id: 1,
        description:
          'Você aprendeu que podemos representar uma imagem através de  pontos pretos e brancos, representados por 0 e 1, respectivamente. Podemos, porém, utilizar também uma representação mais reduzida e que gaste menos memória e menos tempo de transmissão.',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 2,
        description:
          'Para armazenar uma imagem no computador economizando espaço, basta armazenar quantos pontos são pretos e quantos pontos são brancos. Vamos aprender como isso funciona!',
        img: null,
        enableScroll: true,
      },
      {
        type: 'INTRO',
        id: 3,
        enable: false,
        description:
          'Para armazenar uma imagem no computador economizando espaço, basta armazenar quantos pontos são brancos e quantos pontos são pretos. Vamos aprender como isso funciona!',
        img: null,
        enableScroll: true,
        row: 6,
        column: 5,
        paintContent: [
          '0,5',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
          '2, 1, 2',
        ],
      },
      {
        id: 4,
        type: 'QUEST',
        enable: true,
        invisibleRow: -1,
        description: 'Que letra está sendo representada no código abaixo? Você pode pintar os quadrados na cor preta ou branca clicando neles.',
        enableScroll: false,
        row: 6,
        column: 5,
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
        id: 5,
        type: 'QUEST',
        enable: false,
        invisibleRow: 4,
        description: 'Como você representaria a penúltima linha da imagem abaixo?',
        enableScroll: false,
        row: 6,
        column: 5,
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
      {
        id: 6,
        type: 'QUEST',
        enable: true,
        invisibleRow: -1,
        description: 'Que letra está sendo representada no código abaixo? Você pode pintar os quadrados na cor preta ou branca clicando neles.',
        enableScroll: false,
        row: 5,
        column: 5,
        paintContent: [
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
      }
    ]
  }
  const [step, setSteps] = useState(0);
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
          'Você entende como uma imagem pode ser representada com números de forma compactada',
        ],
      });
    } else {
      setQuestion(exercise.questions[step]);
    }
  }, [step]);

  const viewOfContent = () => {
    const content = exercise.questions.map((item) => (
      <View style={styles.containerOfContent}>
        <Text style={styles.contentText}>{item.description}</Text>
        {item.paintContent ? (
          <PaintingTable
            content={item.paintContent}
            isContentReduced
            enable={item.enable}
            row={item.row}
            column={item.column}
            invisibleRow={item.invisibleRow}
      />
) : null}
      </View>
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
      <StatusBar backgroundColor={colors.colorPrimary} />
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewOfContent()}
          setSteps={setSteps}
          style={styles.boxContainer}
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
) : null
        )}
        isLastPage={(question.type !== 'QUEST')}
        textInfor="Arraste o card acima para o lado para continuar."
      />
    </View>
  );
};

export default Level3;
