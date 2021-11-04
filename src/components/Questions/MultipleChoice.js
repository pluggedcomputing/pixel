import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import PropTypes from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const MultipleChoice = (props) => {
  const {
    step,
    setSteps,
    alternatives,
    setCorrectAnswer,
    isAnswer,
    enableAlternatives,
  } = props;

  const [alternativesShuffle, setAlternativesShuffle] = useState([]);

  const shufflerArray = (array) => {
    const shuffleArray = array;
    let indice = array.length;

    while (indice) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      indice -= 1;
      [shuffleArray[indice], shuffleArray[indiceAleatorio]] = [
        shuffleArray[indiceAleatorio],
        shuffleArray[indice],
      ];
    }

    return shuffleArray;
  };

  useEffect(() => {
    setAlternativesShuffle(shufflerArray(alternatives));
  }, [alternatives]);

  return (
    <View style={styles.container}>
      {alternativesShuffle.map((item) => (
        <ChoiceButton
          key={item.text}
          step={step}
          text={item.text.toString()}
          enable={isAnswer}
          correct={item.correct}
          enableAlternatives={enableAlternatives}
          onPress={() => {
            if (item.correct) {
              setCorrectAnswer(true);
              setSteps(step + 1);
            } else {
              setCorrectAnswer(undefined);
            }
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
  enableAlternatives: PropTypes.bool,
};

MultipleChoice.defaultProps = {
  isAnswer: false,
  enableAlternatives: undefined,
};

export default MultipleChoice;
