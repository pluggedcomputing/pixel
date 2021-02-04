import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from "prop-types";

import styles from './styles';

const BoxAlternative = (props) => {
  const { alternativesContent, isLastPage, textInfor } = props;

  return  (
    <View style={styles.container}>
      <View style={[styles.containerBody, !isLastPage ? styles.hide : styles.expandle]}>
        {!isLastPage ? (
          <Text style={styles.defaultText}>
            {textInfor}
          </Text>
  ) : (
    alternativesContent
  )}
      </View>
    </View>
)
}

BoxAlternative.propTypes = {
  alternativesContent: PropTypes.element.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  textInfor: PropTypes.string.isRequired,
}

export default BoxAlternative;