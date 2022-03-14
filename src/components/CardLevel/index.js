import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const CardLevel = (props) => {
  const {image, level, available} = props;


  return (
    <View
      style={[
        available
          ? {borderColor: colors.colorSucess}
          : {borderColor: colors.colorPrimary},
        styles.container,
      ]}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Image source={image} style={styles.imageLeve} />
          <View style={styles.subcontainer}>
            <Text style={styles.textLevelBold}>Fase {level}</Text>
            <Text style={styles.textLevel}>Texto vai aqui</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

CardLevel.propTypes = {
  image: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  available: PropTypes.bool,
};

CardLevel.defaultProps = {
  available: false,
};

export default CardLevel;
