import React from 'react';
import {View} from 'react-native';

import PropTypes from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const SingleChoice = (props) => {
  const {step, setSteps, content} = props;

  return (
    <View style={styles.container}>
      <ChoiceButton
        correct
        onPress={() => setSteps(step + 1)}
        text={content[0]}
        step={step}
        light={false}
      />
      <ChoiceButton
        correct={false}
        onPress={() => setSteps(step + 1)}
        text={content[1]}
        step={step}
        light={false}
      />
    </View>
  );
};

SingleChoice.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default SingleChoice;
