import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';
import uuid from 'react-native-uuid';

import PropTypes from 'prop-types';

import styles from './styles';

const AnimationPagination = (props) => {
  const {size, index, direction} = props;
  const STATE_INIT = 'init';
  const STATE_MIDDLE = 'middle';
  const STATE_FINAL = 'final';
  const [statusPage, setStatusPage] = useState(STATE_INIT);
  const [indexInit, setIndexInit] = useState(0);
  const [indexFinal, setIndexFinal] = useState(5);
  const content = Array.from(Array(size).keys());
  const [pageContent, setPageContent] = useState(
    content.length <= 5
      ? content.slice(indexInit, size)
      : content.slice(indexInit, indexFinal),
  );

  const checkStatePage = (indexCurrent, statePageCurrent) => {
    if (
      statePageCurrent === STATE_INIT &&
      indexCurrent === pageContent.length - 1
    ) {
      setPageContent(content.slice(0, 6));
      setIndexFinal(6);
      setStatusPage(STATE_MIDDLE);
    }

    if (
      statePageCurrent === STATE_MIDDLE &&
      (indexCurrent === pageContent[pageContent.length - 1] ||
        indexCurrent === indexInit)
    ) {
      let valueInit = 0;
      let valueFinal = 6;

      if (direction === 'right') {
        if (indexFinal < size) {
          valueInit = indexInit + 1;
          valueFinal = indexFinal + 1;
        } else {
          valueInit = size - 5;
          valueFinal = size;
          setStatusPage(STATE_FINAL);
        }
      }

      if (direction === 'left') {
        if (indexInit > 0) {
          valueInit = indexInit - 1;
          valueFinal = indexFinal - 1;
        } else {
          valueFinal = 5;
          setStatusPage(STATE_INIT);
        }
      }
      setPageContent(content.slice(valueInit, valueFinal));
      setIndexFinal(valueFinal);
      setIndexInit(valueInit);
    }

    if (
      statePageCurrent === STATE_FINAL &&
      direction === 'left' &&
      indexCurrent === pageContent[0]
    ) {
      setPageContent(content.slice(indexInit - 1, indexFinal - 1));
      setIndexInit(indexInit - 1);
      setIndexFinal(indexFinal - 1);
      setStatusPage(STATE_MIDDLE);
    }
  };
  const mountStateView = () => {
    return pageContent.map((i, k) => (
      <Animated.View
        key={uuid.v4()}
        style={[pinterRetangle(k), stylePagination(k)]}
      />
    ));
  };

  const stylePagination = (indexPagination) => {
    switch (statusPage) {
      case STATE_INIT:
        return indexPagination === pageContent.length - 1
          ? styles.miniRetangle
          : styles.retangle;
      case STATE_MIDDLE:
        return indexPagination === 0 ||
          indexPagination === pageContent.length - 1
          ? styles.miniRetangle
          : styles.retangle;
      default:
        return indexPagination === 0 ? styles.miniRetangle : styles.retangle;
    }
  };

  const pinterRetangle = (position) => {
    return pageContent[position] === index
      ? styles.retanglePainted
      : styles.retangleDefault;
  };

  useEffect(() => {
    checkStatePage(index, statusPage);
  }, [index]);

  return <View style={styles.container}>{mountStateView()}</View>;
};

AnimationPagination.propTypes = {
  size: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default AnimationPagination;
