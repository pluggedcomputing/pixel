import React from 'react';
import {View} from 'react-native';

import PropTypes from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const MultipleChoice = (props) => {
  const {step, setSteps, alternatives, setCorrectAnswer} = props;
  return (
    <View style={styles.container}>
      {alternatives.map((item) => (
        <ChoiceButton
          key={item.text}
          step={step}
          text={item.text}
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
};

export default MultipleChoice;
