import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import uuid from 'react-native-uuid';

import PropTypes from 'prop-types';

import styles from './styles';

const AnimationPagination = (props) => {
  const {content, index, direction} = props;
  const [pageContent, setPageContent] = useState(
    content.length <= 5
      ? content.slice(0, content.length)
      : content.slice(0, 5),
  );
  const STATE_INIT = 'init';
  const STATE_MIDDLE = 'middle';
  const STATE_FINAL = 'final';
  const [statusPage, setStatusPage] = useState(STATE_INIT);
  const [indexInit, setIndexInit] = useState(0);

  const checkStatePage = (indexCurrent, statePageCurrent) => {
    if (
      statePageCurrent === STATE_INIT &&
      indexCurrent === pageContent.length - 1
    ) {
      setPageContent(content.slice(0, pageContent.length + 1));
      setStatusPage(STATE_MIDDLE);
    }

    if (
      statePageCurrent === STATE_MIDDLE &&
      indexCurrent % 5 < pageContent.length
    ) {
      let valueSum = 0;

      if (direction === 'left') {
        if (indexInit > 0) {
          valueSum = indexInit - 1;
        }
        if (indexInit === 0) {
          const newPageContent = content.slice(
            valueSum,
            pageContent.length - 1,
          );
          setStatusPage(STATE_INIT);
          setPageContent(newPageContent);
        }
      }
      if (direction === 'right') {
        valueSum = indexInit + 1;
        let newPageContent = content.slice(
          valueSum,
          pageContent.length + valueSum,
        );
        if (content.length === indexCurrent) {
          valueSum = content.length - 5;
          newPageContent = content.slice(valueSum, content.length);
          setStatusPage(STATE_FINAL);
        }
        setPageContent(newPageContent);
      }
      setIndexInit(valueSum);
    }

    if (
      statePageCurrent === STATE_FINAL &&
      direction === 'left' &&
      content.length - indexCurrent === 6
    ) {
      const valueInit = indexCurrent % 6;
      setPageContent(content.slice(valueInit, indexCurrent));
      setIndexInit(valueInit);
      setStatusPage(STATE_MIDDLE);
    }
  };

  const finalPage = (indexPage) => {
    return indexPage === pageContent.length - 1;
  };

  const pinterRetangle = (indexCurrent) => {
    const indexPage = index >= 5 ? index % 5 : index;
    if (indexPage === indexCurrent) return styles.retanglePainted;

    return styles.retangleDefault;
  };

  const mountRetanglePage = () => {
    return pageContent.map((i, k) => (
      <View
        key={uuid.v4()}
        style={[
          pinterRetangle(k),
          finalPage(k) ? styles.miniRetangle : styles.retangle,
        ]}
      />
    ));
  };

  const reloadindRetanglePage = () => {
    return pageContent.map((i, k) => (
      <View key={uuid.v4()} style={[pinterRetangle(k), styles.miniRetangle]} />
    ));
  };

  const choiceRetanglePage = () => {
    switch (statusPage) {
      case STATE_INIT:
        return mountRetanglePage();
      case STATE_MIDDLE:
        return reloadindRetanglePage();
      default:
        return mountRetanglePage();
    }
  };

  useEffect(() => {
    checkStatePage(index, statusPage);
  }, [index]);

  return <View style={styles.contianer}>{choiceRetanglePage()}</View>;
};

AnimationPagination.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default AnimationPagination;
