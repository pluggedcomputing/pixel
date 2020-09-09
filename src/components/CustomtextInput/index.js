import React from 'react';
import { View } from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {  PropTypes } from 'prop-types';

import metrics from '../../styles/metrics';
import styles from './styles';

const CustomTextInput = props => {
  const { style, icon } =  props;

  const iconSize = {
    size: metrics.screenWidth * 0.05,
  }

  return (
    <View style={styles.container}>
      <Icon name={icon} size={iconSize.size} />
      <TextInput
        {...props}
        style={[styles.input, style]}
        autoCapitalize='none'
      />
    </View>
  )
}

CustomTextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

CustomTextInput.defaultProps = {
  style: null,
};

export default CustomTextInput;