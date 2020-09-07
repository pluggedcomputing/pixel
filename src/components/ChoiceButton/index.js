import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '../../styles';
import styles from './styles';

const ChoiceButton = props => {
  // eslint-disable-next-line react/prop-types
  const { correct, onPress, text, step } = props;
  const [ backgroundColor, setBackgroundColor ] = useState(colors.colorSucess)

  useEffect(() => {
    setBackgroundColor(colors.colorPrimary);
  }, [step]);

  function onPressButton() {
    if (correct) {
      setBackgroundColor(colors.colorTextPrimary)
    } else {
      setBackgroundColor(colors.colorError)
    }
    setTimeout(() => onPress(), 350);
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPressButton}>
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

ChoiceButton.prototype = {
  correct: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};


ChoiceButton.defaultProps = {
  correct: false,
}

export default ChoiceButton;