import React from 'react';
import {View, Image} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const ShowImage = (props) => {
  const {step, setSteps, img} = props;

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.logo} />
      <ChoiceButton
        correct
        onPress={() => setSteps(step + 1)}
        text="proximo"
        step={step}
        light={false}
      />
    </View>
  );
};

ShowImage.propTypes = {
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
  img: PropTypes.number.isRequired,
};

export default ShowImage;
