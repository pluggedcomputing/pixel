import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const BoxAlternative = (props) => {
  const {alternativesContent, isNotQuestion, textInfor} = props;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerBody,
          isNotQuestion ? styles.hide : styles.expandle,
        ]}>
        {isNotQuestion ? (
          <Text style={styles.defaultText}>{textInfor}</Text>
        ) : (
          alternativesContent
        )}
      </View>
    </View>
  );
};

BoxAlternative.propTypes = {
  alternativesContent: PropTypes.element,
  isNotQuestion: PropTypes.bool.isRequired,
  textInfor: PropTypes.string.isRequired,
};

BoxAlternative.defaultProps = {
  alternativesContent: null,
};

export default BoxAlternative;
