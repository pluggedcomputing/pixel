import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButton = (props) => {
  const {correct, onPress, text, step, light} = props;
  const [borderColor, setborderColor] = useState(colors.colorSecondaryDark);

  useEffect(() => {
    if (light) {
      setborderColor(colors.colorSecondaryLight);
    }
  }, [step]);

  function onPressButton() {
    if (correct) {
      setborderColor(colors.colorSucess);
    } else {
      setborderColor(colors.colorError);
    }
    setTimeout(() => onPress(), 350);
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {borderColor}]}
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
};

ChoiceButton.defaultProps = {
  correct: false,
  light: false,
};

export default ChoiceButton;
