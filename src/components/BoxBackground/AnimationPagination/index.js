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
      let pageState = STATE_MIDDLE;
      let finalIndex = 6;
      if (size === 6) {
        pageState = STATE_FINAL;
        finalIndex = 5;
      }
      setStatusPage(pageState);
      setPageContent(content.slice(0, finalIndex));
      setIndexFinal(finalIndex);
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
      let pageState = STATE_MIDDLE;
      let finalIndex = indexFinal;
      let initIndex = indexInit - 1;
      if (size === 6) {
        pageState = STATE_INIT;
        finalIndex = indexFinal;
        initIndex = indexInit;
      }
      setStatusPage(pageState);
      setPageContent(content.slice(initIndex, finalIndex));
      setIndexFinal(finalIndex);
      setIndexInit(initIndex);
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

  const minViewPagination = () => {
    return size <= 5;
  };

  const stylePagination = (indexPagination) => {
    if (minViewPagination()) {
      return styles.retangle;
    }
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
