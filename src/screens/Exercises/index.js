import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Image, StatusBar, Text, TouchableOpacity} from 'react-native';

import {useRoute} from '@react-navigation/native';
import Animation from 'lottie-react-native';

import image from '../../assets/images/levelSelection/Group.png';
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
  const [step, setSteps] = useState(0);
  const [question, setQuestion] = useState(exercise.questions[step]);
  const maxStep = exercise.questions.length;
  const finishLevel = step === maxStep;
  const [nextCard, setNextCard] = useState(false);
  const [listQuestionReleased, setListQuestionReleased] = useState([]);
  const {level, congratulations} = response;
  const [contentCurrent, setContentCurrent] = useState([]);
  const [wasPaint, setWasPaint] = useState(true);
  const levelFinal = 4;
  const [firstClickButton, setFirstClickButton] = useState(false);
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

  const translateToCode = (auxAnswerPaint, isColor) => {
    return auxAnswerPaint.map((item) => translateRunLenghtCode(item, isColor));
  };

  const updateAnswer = () => {
    const auxAnswerPaint = exercise.questions[step].isContentReduced
      ? translateToCode(answerPaint, exercise.questions[step].isColorFul)
      : answerPaint;
    const objectRealeased = findById(exercise.questions[step].id);
    const index = listQuestionReleased.indexOf(objectRealeased);
    objectRealeased.permission = true;
    listQuestionReleased[index] = objectRealeased;

    if (!exercise.questions[step].isCreateAlternatives) {
      if (auxAnswerPaint.length > 0 && auxAnswerPaint[0].length > 0) {
        listQuestionReleased[index].answerDrawPaint = auxAnswerPaint;
      }

      const nextStep = step + 1;

      if (
        step < maxStep &&
        nextStep < maxStep &&
        exercise.questions[nextStep].isCreateAlternatives
      ) {
        const objectNextAnswer = findById(exercise.questions[nextStep].id);
        const indexNextAnswer = listQuestionReleased.indexOf(objectNextAnswer);

        listQuestionReleased[indexNextAnswer].answerDrawPaint = auxAnswerPaint;

        listQuestionReleased[index].answerDrawPaint = auxAnswerPaint;
      }

      setAnswerPaint([]);
    }
  };

  const getAnswerPaint = () => {
    const objectRealeased = findById(exercise.questions[step].id);
    if (objectRealeased === undefined)
      return exercise.questions[step].paintContent;

    const hasDrawPaint =
      objectRealeased.answerDrawPaint.length > 0 &&
      (objectRealeased.permission ||
        exercise.questions[step].isCreateAlternatives);

    return hasDrawPaint && !question.isDemonstration
      ? objectRealeased.answerDrawPaint
      : exercise.questions[step].paintContent;
  };

  useEffect(() => {
    mountListPermissions();
  }, [response]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `FASE ${response.level}`,
    });
  }, [navigation]);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {
        level,
        content: congratulations,
        isFinish: level === levelFinal,
      });
    } else {
      if (exercise.questions[step].isCreateAlternatives) {
        let copyArray = null;
        if (exercise.questions[step].idAnswerQuestion) {
          const objectRealeased = findById(exercise.questions[step].id);
          copyArray = JSON.parse(
            JSON.stringify(objectRealeased.answerDrawPaint),
          );
        } else {
          copyArray = JSON.parse(
            JSON.stringify(exercise.questions[step].paintContent),
          );
        }

        exercise.questions[step].alternatives = generateAlternatives(
          copyArray,
          exercise.questions[step].isContentReduced,
          true,
          exercise.questions[step].isColorFul,
        );
      }

      setQuestion(exercise.questions[step]);
      if (exercise.questions[step].type === TypeQuestions.PAINTINGTABLE) {
        if (
          exercise.questions[step].alternatives &&
          exercise.questions[step].alternatives.length > 0
        ) {
          const generateAlternativesShuffler =
            exercise.questions[step].isContentReduced &&
            !exercise.questions[step].hasConverted
              ? converterArrayBinaryAndRunLengthCode(getAnswerPaint())
              : getAnswerPaint();

          if (generateAlternativesShuffler) {
            setContentCurrent(generateAlternativesShuffler);
          }
        } else {
          setContentCurrent(getAnswerPaint());
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
            setClickButtonFirst={setWasPaint}
            content={contentCurrent}
            enable={checkEnablePaint()}
            isContentReduced={question.isContentReduced}
            row={question.row}
            column={question.column}
            isDemonstration={question.isDemonstration}
            invisibleRow={question.invisibleRow}
            paintingFreely={question.paintingFreely}
            lackRowPixel={question.lackRowPixel}
            isColorFul={
              exercise.questions[step]
                ? exercise.questions[step].isColorFul
                : false
            }
          />
        );
      default:
        switch (question.imgFormat) {
          case 'img':
            return (
              <Image
                style={styles.statementImage}
                source={getImage(question.img)}
              />
            );
          case 'anim':
            return (
              <Animation
                source={getImage(question.img)}
                style={styles.animation}
                autoPlay
                loop
              />
            );
          default:
            return null;
        }
    }
  };

  const viewContent = () => {
    const content = exercise.questions.map((item) => {
      return (
        <View style={styles.viewBoxContent}>
          {choiceComponentBox()}
          <Text style={styles.contentText}>{item.text}</Text>
        </View>
      );
    });
    return content;
  };

  const setAnswerCorrectInQuestion = (isCorrect) => {
    if (!firstClickButton) {
      setFirstClickButton(true);
    }
    if (isCorrect) {
      setFirstClickButton(false);
      setNextCard(true);
      updateAnswer();
    }
  };

  const getAlternativesContent = (listAlternatives) => {
    if (!listAlternatives) return null;
    return (
      <View style={styles.contentContainerStyle}>
        <MultipleChoice
          step={step}
          isAnswer={isAnswered()}
          setSteps={setSteps}
          enableAlternatives={question.minPaintPixel ? wasPaint : true}
          alternatives={question.alternatives}
          setCorrectAnswer={setAnswerCorrectInQuestion}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.colorAccent} />
      <TouchableOpacity>
        <Image source={image} style={styles.buttonImageRotate} />
      </TouchableOpacity>
      <View style={{position: 'absolute'}}>
        <BoxBackground
          content={viewContent()}
          setSteps={setSteps}
          scrollEnabled={isAnswered() || question.isDemonstration}
          nextQuestion={nextCard}
          setNextQuestion={setNextCard}
          answerAgain={firstClickButton}
        />
      </View>
      <BoxAlternative
        alternativesContent={getAlternativesContent(question.alternatives)}
        isNotQuestion={
          !question.alternatives ||
          (question.alternatives && question.alternatives.length === 0)
        }
        textInfor=""
      />
      <TouchableOpacity onPress={() => navigation.navigate('Exercises', {Exercises: findById(exercise.questions[step].id)})}>
        <Image source={image} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Exercises;
