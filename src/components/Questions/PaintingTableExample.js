import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import PaintingTable from '../PaintingTable';
import styles from './styles';

const PaintingTableExample = (props) => {
  const {step, setSteps, content, size, message} = props;
  return (
    <View style={styles.container}>
      <PaintingTable content={content} enable={false} size={size} />
      <View style={styles.contianerMessage}>
        <Text>{message}</Text>
      </View>
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

PaintingTableExample.propTypes = {
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number,
  message: PropTypes.string.isRequired,
};

PaintingTableExample.defaultProps = {
  size: 8,
};

export default PaintingTableExample;
