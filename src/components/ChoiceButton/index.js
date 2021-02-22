import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButton = (props) => {
  const {correct, onPress, text, step, enable} = props;
  const [borderColor, setBorderColor] = useState('');
  useEffect(() => {
    setBorderColor(colors.colorSecondaryDark);
    if(enable && correct) setBorderColor(colors.colorSucess);
  }, [step]);

  function onPressButton() {
    if (correct) {
      setBorderColor(colors.colorSucess);
    } else {
      setBorderColor(colors.colorError);
    }
    setTimeout(() => onPress(), 350);
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {borderColor}]}
        disabled={enable}
        onPress={onPressButton}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

ChoiceButton.propTypes = {
  correct: PropTypes.bool,
  light: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  enable: PropTypes.bool,
};

ChoiceButton.defaultProps = {
  correct: false,
  light: false,
  enable: false,
};

export default ChoiceButton;
