import React from 'react';
import {View} from 'react-native';

import PropTypes from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const MultipleChoice = (props) => {

const {step, setSteps, alternatives, setCorrectAnswer, isAnswer} = props;

  const shufflerArray = (array) => {
    const shuffleArray = array;
    let indice = array.length

      while(indice) {
          const indiceAleatorio = Math.floor(Math.random() * indice);
          indice -= 1;
          [shuffleArray[indice], shuffleArray[indiceAleatorio]] =
              [shuffleArray[indiceAleatorio], shuffleArray[indice]];
      }

      return shuffleArray;
  }

  const shuffleAlternatives = shufflerArray(alternatives);
  return (
    <View style={styles.container}>
      {shuffleAlternatives.map((item) => (
        <ChoiceButton
          key={item.text}
          step={step}
          text={item.text.toString()}
          enable={isAnswer}
          correct={item.correct}
          onPress={() => {
            if (item.correct){
              setCorrectAnswer(true);
              setSteps(step + 1)};
          }}
          light
        />
      ))}
    </View>
  );
};

MultipleChoice.propTypes = {
  alternatives: PropTypes.arrayOf(PropTypes.object).isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
  setCorrectAnswer: PropTypes.func.isRequired,
  isAnswer: PropTypes.bool,
};

MultipleChoice.defaultProps = {
  isAnswer: false,
}

export default MultipleChoice;
