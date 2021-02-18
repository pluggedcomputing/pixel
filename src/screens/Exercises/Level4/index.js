import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';

import BoxAlternative from "../../../components/BoxAlternative";
import BoxBackground from '../../../components/BoxBackground';
import ChoiceButton from '../../../components/ChoiceButton';
import PaintingTable from "../../../components/PaintingTable";
import {MultipleChoice} from '../../../components/Questions';
import {colors} from '../../../styles';
import RandomRowValue from "../../../utils/randomRowValue";
import styles from './styles';


const Level4 = ({navigation}) => {
  const [isLastPage, setIsLastPage] = useState(false);
  const [answerPaint, setAnswerPain] = useState([]);
  const [step, setSteps] = useState(0);
  const response = {
    level: 4,
    introductions: [
      {
        id: 1,
        text:
        'Que tal desenhar você mesmo e tentar descobir o código que representa essa imagem. ',
      },
    ],
    questions: [
      {
        type: '',
        enable: true,
        invisibleRow: -1,
        paintingFreely: true,
        description:
          'Pinte no quadro abaixo sua imagem e clique em concluir. ',
        alternatives: [
          {
            id: '1',
            text: 'Concluir',
            correct: true,
          },
        ],
      },
      {
        type: '',
        enable: false,
        invisibleRow: 0,
        paintingFreely: false,
        description:
          'Selecione a sequência que representa a primeira linha de sua foto',
        alternatives: [
          {
            id: '1',
            text: RandomRowValue(5, answerPaint[0]),
            correct: false,
          },
          {
            id: '2',
            text: RandomRowValue(5, answerPaint[0]),
            correct: false,
          },
          {
            id: '3',
            text: answerPaint[0],
            correct: true,
          },
          {
            id: '4',
            text: RandomRowValue(5, answerPaint[0]),
            correct: false,
          },
        ],
      },
    ],
  };
  const [question, setQuestion] = useState(response.questions[step]);
  const maxStep = response.questions.length;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level: 4,
        content: ['Entende a necessidade de comprimir dados'],
      });
    }
    else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  const checkAlternativeEqual = () => {
    const indexEquals = [];
    question.alternatives.forEach((item, index) => {
      if(question.alternatives.filter(itemComparable => itemComparable.text === item.text).length > 1){
        indexEquals.push(index);
      }
    })

    if(indexEquals.length > 0){
      indexEquals.forEach(item =>
        {question.alternatives[item].text = RandomRowValue(5, answerPaint[0])}
        );
        checkAlternativeEqual();
    }
  }

  const viewOfContent = () => {
    const content = response.introductions.map((item) => (
      <View style={styles.viewBoxContent}>
        <Text style={styles.textBoxContent}>{item.text}</Text>
      </View>
    ));
    if(!question.paintingFreely){
      question.paintContent = answerPaint;
    };
    content.push(
      <View style={styles.viewBoxContent}>
        <Text style={styles.textBoxContent}>{question.description}</Text>
        <PaintingTable
          paintingFreely={question.paintingFreely}
          setAnswerPaint={setAnswerPain}
          content={question.paintContent}
          isContentReduced={false}
          enable={question.enable}
          row={6}
          column={5}
          invisibleRow={question.invisibleRow}
        />
      </View>,
    );
    return content;
  };

  const choicAlternative = () => {
    if(question.alternatives.length > 1) checkAlternativeEqual();
    return question.alternatives.length > 1 ? (
      <MultipleChoice
        step={step}
        setSteps={setSteps}
        alternatives={question.alternatives}
  />
  ) : (
    <ChoiceButton
      style={styles.buttons}
      step={step}
      text={question.alternatives[0].text}
      correct={question.alternatives[0].correct}
      onPress={() => {
    if (question.alternatives[0].correct) {
      setSteps(step + 1);
    }
  }}
/>
)}

  const BoxContent = () => (
    <>
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewOfContent()}
          isLastPage={setIsLastPage}
        />
      </View>
      <BoxAlternative
        alternativesContent={choicAlternative()}
        isLastPage={!isLastPage}
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
