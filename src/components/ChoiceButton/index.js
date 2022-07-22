import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButton = (props) => {
  const {correct, onPress, text, step, enable, enableAlternatives} = props;
  const [backgroundColor, setBackgroundColor] = useState('');
  useEffect(() => {
    if (!enable && enableAlternatives === null) {
      setBackgroundColor(colors.colorBlank);
    } else {
      setBackgroundColor(colors.colorDesabled);
    }

    if (enable && correct) setBackgroundColor(colors.colorSucess);
  }, [step]);

  useEffect(() => {
    if (!enable && enableAlternatives !== null) {
      if (enableAlternatives) {
        setBackgroundColor(colors.colorSecondary);
      } else {
        setBackgroundColor(colors.colorDesabled);
      }
    }
  }, [enableAlternatives]);

  function onPressButton() {
    if (correct) {
      setBackgroundColor(colors.colorSucess);
    } else {
      setBackgroundColor(colors.colorError);
    }
    setTimeout(() => onPress(), 350);
  }

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor}]}
        disabled={enable || !enableAlternatives}
        onPress={() => onPressButton()}>
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
  enableAlternatives: PropTypes.bool,
};

ChoiceButton.defaultProps = {
  correct: false,
  light: false,
  enable: false,
  enableAlternatives: false,
};

export default ChoiceButton;
