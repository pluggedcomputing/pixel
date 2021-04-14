import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';

import BoxAlternative from "../../../components/BoxAlternative";
import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import PaintingTable from '../../../components/PaintingTable';
import MultipleChoice from '../../../components/Questions/MultipleChoice';
import {colors} from '../../../styles';
import generateAlternatives from "../../../utils/generateAlternatives";
import translateRunLenghtCode from '../../../utils/translateRunLenghtCode';
import styles from './styles';

const Level4 = ({navigation}) => {
  const [answerPaint, setAnswerPaint] = useState([]);
  const [step, setSteps] = useState(0);

  const responseAll = {
    level: 4,
    questions: [
      {
        type: 'INTRO',
        id: 1,
        description:
          'Como vimos antes, uma máquina de fax é capaz de transmitir imagens para uma outra máquina. Imagens impressas por máquinas de fax geralmente têm grandes blocos de pixels brancos (por exemplo, as margens) ou pretos (por exemplo, uma linha horizontal).',
        img: null,
      },
      {
        type: 'INTRO',
        id: 2,
        description:
          `Imagens coloridas também possuem áreas repetidas. A fim de economizar o espaço de armazenamento necessário para guardar essas imagens, os programadores podem usar diversas técnicas de compressão.  O método utilizado nas atividades do Nível 3 para representar quantidades de pixels brancos e pretos é chamado de 'run-length coding'. Esse método permite comprimir imagens. Se as imagens não fossem comprimidas, estas levariam muito mais tempo para serem transmitidas e exigiriam muito mais espaço para armazenamento. Isto tornaria inviável enviar páginas de fax ou colocar fotos em uma página da Internet.`,
        img: null,
      },
      {
        type: 'INTRO',
        id: 3,
        description:
          'Por exemplo, imagens de fax eram geralmente comprimidas para aproximadamente um sétimo do seu tamanho original. Sem a compressão, estas demorariam sete vezes mais para serem transmitidas! Lembre-se de que as velocidades de transmissão não eram tão boas antigamente como as que temos hoje.',
        img: null,
      },
      {
        id: 4,
        type: 'QUEST',
        enable: true,
        invisibleRow: -1,
        paintingFreely: true,
        description: 'Que tal desenhar você mesmo e tentar descobir o código que representa essa imagem? Pinte no quadro abaixo sua imagem e clique em concluir.',
        paintContent: [],
        alternatives: [
          {
            id: '1',
            text: 'Concluir',
            correct: true,
          },

        ],
      },
      {
        id: 5,
        type: 'QUEST',
        enable: false,
        invisibleRow: 0,
        description: 'Selecione a sequência que represente a primeira linha de sua foto',
        paintingFreely: false,
        paintContent: [],
        alternatives: []
      },
      {
        type: 'INTRO',
        id: 6,
        enable: false,
        description:
          'Fotografias e imagens são freqüentemente comprimidas para um décimo ou até mesmo um centésimo do seu tamanho original (utilizando uma técnica diferente). Isto permite que um número bem maior de imagens seja armazenado em um disco e significa que vê- las na Internet levará bem menos tempo. Um programador pode escolher a técnica mais adequada à compressão das imagens que está transmitindo.',
        img: null,
        alternatives: [
          {
            id: '1',
            text: 'Finalizar',
            correct: true,
          },

        ],
      },
    ]
  };

  const [exercise] = useState(responseAll);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const positionQuestion = exercise.questions.length - 2;
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);
  const [questionEnabled] = useState([]);

  const converterArrayBinaryAndRunLengthCode = () => {
    return answerPaint.map(item => {
      return translateRunLenghtCode(item)})
  }

  const isAnswered = () => {
    return  step < maxStep && questionEnabled.includes(exercise.questions[step].id);
  }

  const insertAnswer = () => {
    if(!isAnswered() ){
      questionEnabled.push(exercise.questions[step].id);
    }
  }

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 4,
        content: ['Você entende a necessidade de comprimir dados', 'Você aprendeu como comprimir dados referentes a pixels utilizando run-length coding', 'Você concluiu todos os níveis'],
      });
    }else{
      if(positionQuestion === step && answerPaint && answerPaint[0].length > 0){
        const copyArray = JSON.parse(JSON.stringify(answerPaint));
        exercise.questions[positionQuestion].paintContent = converterArrayBinaryAndRunLengthCode()
        exercise.questions[positionQuestion].alternatives = generateAlternatives(copyArray);
      }

      if(exercise.questions[step].type === 'INTRO'){
        insertAnswer();
      }

      setQuestion(exercise.questions[step]);
    }
  }, [step]);


  const viewOfContent = () => {
    const content = exercise.questions.map((item) =>
    {
      return (
        <View style={styles.viewBoxContent}>
          <Text style={styles.textBoxContent}>{item.description}</Text>
          {item.paintContent ? (
            <PaintingTable
              paintingFreely={item.paintingFreely}
              setAnswerPaint={setAnswerPaint}
              content={item.paintContent}
              isContentReduced
              enable={item.enable}
              row={6}
              column={5}
              invisibleRow={item.invisibleRow}
      />
) : null}
        </View>
    )}

    );
    return content;
  };

  const choicAlternative = () => {
    const lastNotCard = step < (maxStep - 1);
    if(!question.alternatives || question.alternatives.length === 0) return null;
    return question.alternatives.length > 1 ? (
      <MultipleChoice
        step={step}
        setSteps={setSteps}
        isAnswer={isAnswered()}
        alternatives={question.alternatives}
        setCorrectAnswer={setAnswerCorrectInQuestion}
  />
  ) : (
    <ChoiceButton
      style={styles.buttons}
      step={step}
      text={question.alternatives[0].text}
      correct={question.alternatives[0].correct}
      enable={isAnswered() && lastNotCard}
      onPress={() => {
    if (question.alternatives[0].correct) {
      setAnswerCorrectInQuestion(true);
      setSteps(step + 1);
    }
  }}
/>
)}

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if(isCorrect){
      insertAnswer();
      setNextCard(true);
      }
  }

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          scrollEnabled={isAnswered()}
          content={viewOfContent()}
          setSteps={setSteps}
          style={styles.boxContainer}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
        />
      </View>
      <BoxAlternative
        alternativesContent={choicAlternative()}
        isLastPage={(question.type !== 'QUEST' && question.type === 'INTRO' && !question.alternatives)}
        textInfor="Arraste o card acima para o lado para continuar." />
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      {BoxContent()}
    </View>
  );
};

export default Level4;
