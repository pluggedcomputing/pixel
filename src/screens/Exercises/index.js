import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Image, StatusBar, Text} from 'react-native';

import {useRoute} from '@react-navigation/native';

import BoxAlternative from '../../components/BoxAlternative';
import BoxBackground from '../../components/BoxBackground';
import PaintingTable from '../../components/PaintingTable';
import {MultipleChoice} from '../../components/Questions';
import TypeQuestions from '../../enums/TypeQuestins';
import {colors} from '../../styles';
import generateAlternatives from '../../utils/generateAlternatives';
import getImage from '../../utils/getImage';
import translateRunLenghtCode from '../../utils/translateRunLenghtCode';
import styles from './styles';

const Exercises = ({navigation}) => {
  const [answerPaint, setAnswerPaint] = useState([]);
  const response = useRoute().params.data;
  const [exercise] = useState(response);
  const positionQuestion = exercise.questions.length - 2;
  const [step, setSteps] = useState(0);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);
  const [listQuestionReleased, setListQuestionReleased] = useState([]);
  const {level, congratulations} = response;
  const [contentCurrent, setContentCurrent] = useState([]);

  const mountListPermissions = () => {
    const auxList = [];

    exercise.questions.forEach((item) => {
      auxList.push({
        id: item.id,
        permission: !item.alternatives,
        answerDrawPaint: [],
      });
    });

    setListQuestionReleased(auxList);
  };

  const converterArrayBinaryAndRunLengthCode = (list) => {
    return list.map((item) => {
      return translateRunLenghtCode(item);
    });
  };

  const findById = (id) => {
    return listQuestionReleased.find((item) => id === item.id);
  };

  const isAnswered = () => {
    return (
      step < maxStep &&
      listQuestionReleased.length > 0 &&
      listQuestionReleased[step].permission
    );
  };

  const updateAnswer = () => {
    const objectRealeased = findById(exercise.questions[step].id);
    const index = listQuestionReleased.indexOf(objectRealeased);
    objectRealeased.permission = true;
    listQuestionReleased[index] = objectRealeased;

    if (!exercise.questions[step].isCreateAlternatives) {
      if (answerPaint.length > 0 && answerPaint[0].length > 0) {
        listQuestionReleased[index].answerDrawPaint = answerPaint;
      }

      const nextStep = step + 1;

      if (
        step < maxStep &&
        nextStep < maxStep &&
        exercise.questions[nextStep].isCreateAlternatives
      ) {
        const objectNextAnswer = findById(exercise.questions[nextStep].id);
        const indexNextAnswer = listQuestionReleased.indexOf(objectNextAnswer);

        listQuestionReleased[indexNextAnswer].answerDrawPaint = answerPaint;

        listQuestionReleased[index].answerDrawPaint = answerPaint;
      }

      setAnswerPaint([]);
    }
  };

  const getAnswerPaint = () => {
    const objectRealeased = findById(exercise.questions[step].id);

    const hasDrawPaint =
      objectRealeased.answerDrawPaint.length > 0 &&
      (objectRealeased.permission ||
        exercise.questions[step].isCreateAlternatives);

    return hasDrawPaint
      ? objectRealeased.answerDrawPaint
      : exercise.questions[step].paintContent;
  };

  useEffect(() => {
    mountListPermissions();
  }, [response]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Nível ${response.level}`,
    });
  }, [navigation]);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level,
        content: congratulations,
      });
    } else {
      if (exercise.questions[step].isCreateAlternatives) {
        const objectRealeased = findById(exercise.questions[step].id);
        const copyArray = JSON.parse(
          JSON.stringify(objectRealeased.answerDrawPaint),
        );

        exercise.questions[positionQuestion].alternatives =
          generateAlternatives(
            copyArray,
            exercise.questions[positionQuestion].isContentReduced,
          );
      }

      setQuestion(exercise.questions[step]);
      if (exercise.questions[step].type === TypeQuestions.PAINTINGTABLE) {
        const generateAlternativesShuffler = question.isContentReduced
          ? converterArrayBinaryAndRunLengthCode(getAnswerPaint())
          : getAnswerPaint();

        if (generateAlternativesShuffler) {
          setContentCurrent(generateAlternativesShuffler);
        }
      }
    }
  }, [step, nextCard]);

  const checkEnablePaint = () => {
    return question.enable && !isAnswered();
  };

  const choiceComponentBox = () => {
    switch (question.type) {
      case TypeQuestions.PAINTINGTABLE:
        return (
          <PaintingTable
            setAnswerPaint={setAnswerPaint}
            content={contentCurrent}
            enable={checkEnablePaint()}
            isContentReduced={question.isContentReduced}
            row={question.row}
            column={question.column}
            invisibleRow={question.invisibleRow}
            paintingFreely={question.paintingFreely}
          />
        );
      default:
        return question.img ? (
          <Image
            style={styles.statementImage}
            source={getImage(question.img)}
          />
        ) : null;
    }
  };

  const viewContent = () => {
    const content = exercise.questions.map((item) => {
      return (
        <View style={styles.viewBoxContent}>
          <Text style={styles.contentText}>{item.text}</Text>
          {choiceComponentBox()}
        </View>
      );
    });
    return content;
  };

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if (isCorrect) {
      setNextCard(true);
      updateAnswer();
    }
  };

  const getAlternativesContent = (listAlternatives) => {
    let value = null;

    if (!listAlternatives) return null;

    if (listAlternatives.length > 1) {
      value = (
        <View style={styles.contentContainerStyle}>
          <MultipleChoice
            step={step}
            isAnswer={isAnswered()}
            setSteps={setSteps}
            alternatives={question.alternatives}
            setCorrectAnswer={setAnswerCorrectInQuestion}
          />
        </View>
      );
    } else {
      value = (
        <View style={styles.contentContainerStyle}>
          <MultipleChoice
            step={step}
            isAnswer={isAnswered()}
            setSteps={setSteps}
            alternatives={question.alternatives}
            setCorrectAnswer={setAnswerCorrectInQuestion}
          />
        </View>
      );
    }

    return value;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorPrimary} />
      <View style={styles.halfTopView}>
        <BoxBackground
          content={viewContent()}
          setSteps={setSteps}
          scrollEnabled={isAnswered()}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
        />
      </View>
      <BoxAlternative
        alternativesContent={getAlternativesContent(question.alternatives)}
        isNotQuestion={
          !question.alternatives ||
          (question.alternatives && question.alternatives.length === 0)
        }
        textInfor="Arraste o card acima para o lado para continuar."
      />
    </View>
  );
};

export default Exercises;
