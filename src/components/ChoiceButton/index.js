import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import { colors } from '../../styles';
import styles from './styles';

const ChoiceButton = props => {
  const { correct, onPress, text, step, light } = props;
  const [ backgroundColor, setBackgroundColor] = useState(colors.colorPrimary);
  const [ color, setTextColor] = useState(colors.colorTextSecondary)

  useEffect(() => {
    setBackgroundColor(colors.colorPrimary);
  }, [step]);

  function onPressButton() {
    if (correct) {
      setBackgroundColor(colors.colorSucess)
    } else {
      setBackgroundColor(colors.colorError)
    }
    setTimeout(() => onPress(), 350);
  }

  // eslint-disable-next-line no-unused-vars
  function isLight () {
    if(light) {
      setBackgroundColor(colors.colorSecondary);
      setTextColor(colors.colorPrimary);
    }
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPressButton}>
        <Text style={[styles.text, {color}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

ChoiceButton.propTypes = {
  correct: PropTypes.bool,
  light: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};


ChoiceButton.defaultProps = {
  correct: false,
  light: false
}

export default ChoiceButton;