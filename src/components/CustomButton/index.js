import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import {PropTypes} from 'prop-types';

import tetris01 from '../../assets/images/tetris01.png';
import tetris02 from '../../assets/images/tetris02.png';
import styles from './styles';

const CustomButton = (props) => {
  const {text, style} = props;

  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Image source={tetris01} style={styles.image} />
      <Text style={styles.textButton}>{text}</Text>
      <Image source={tetris02} style={styles.image} />
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CustomButton.defaultProps = {
  style: null,
};

export default CustomButton;
