import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import AlertCustom from './AlertCustom';
import styles from './styles';

const BoxBackground = (props) => {
  const {
    content,
    style,
    isLastPage,
    updatePage,
    setSteps,
    nextQuestion,
    setNextQuestion,
    scrollEnabled,
    answerAgain,
    sizeAlternatives,
  } = props;
  const [pagination, setPagination] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isEndPage, setIsEndPage] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [focusInit, setFocusInit] = useState(0);
  const maxValueProgress = 2;
  const checkStateAnswer = focusInit === maxValueProgress;
  const waitingTime = 60;
  let flatListRef = null;

  useEffect(() => {
    if (flatListRef !== null && updatePage !== null) {
      flatListRef.scrollToIndex({index: 0});
      setFocusInit(0);
    }
  }, [updatePage]);

  useEffect(() => {
    const indexNext = pagination + 1;
    if (flatListRef !== null && nextQuestion && !isEndPage && !scrollEnabled) {
      setPagination(indexNext);
      flatListRef.scrollToIndex({index: indexNext});
      setNextQuestion(false);
      setFocusInit(0);
    }
  }, [nextQuestion]);

  const checkDireciton = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    setOffset(currentOffset);
    if (scrollEnabled) {
      if (!isEndPage) {
        changePaginationIndex(event, currentOffset > offset);
      } else if (isEndPage) {
        setPagination(pagination - 1);
        setIsEndPage(false);
      }
    } else if (currentOffset > offset && !scrollEnabled) {
      flatListRef.scrollToIndex({index: pagination});

      setTimeout(() => {
        setFocusInit(focusInit + 1);
      }, waitingTime);

      if (!modalAlert) {
        setModalAlert(true);
      }
    } else if (!scrollEnabled && currentOffset < offset) {
      changePaginationIndex(event, currentOffset > offset);
    }
  };

  const changePaginationIndex = (event, direction) => {
    const {contentOffset} = event.nativeEvent;

    const viewSize = event.nativeEvent.layoutMeasurement;

    const index = Math.round(contentOffset.x / viewSize.width);

    setIsEndPage(false);

    if (
      (direction && index > pagination) ||
      (!direction && index < pagination)
    ) {
      setFocusInit(0);
      setSteps(index);
      setPagination(index);
    }
  };

  const convertIndexInProgress = (index) =>
    ((index + 1) * 100) / content.length / 100;

  const renderItem = ({item}) => {
    return <View style={styles.boxContainer}>{item}</View>;
  };

  return (
    <View style={[styles.container, style]}>
      <AlertCustom
        visible={modalAlert && checkStateAnswer && sizeAlternatives > 1}
        setVisibleFunc={setModalAlert}
        answerAgain={answerAgain}
      />
      <FlatList
        ref={(ref) => {
          flatListRef = ref;
        }}
        data={content}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          isLastPage(true);
          setIsEndPage(true);
        }}
        horizontal
        pagingEnabled
        onScroll={(event) => {
          checkDireciton(event);
        }}
        renderItem={renderItem}
      />
      <View style={styles.progressBar}>
        <ProgressBar
          progress={convertIndexInProgress(pagination)}
          color={colors.colorAccent}
        />
      </View>
    </View>
  );
};

BoxBackground.propTypes = {
  updatePage: PropTypes.number,
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf]),
  isLastPage: PropTypes.func,
  setSteps: PropTypes.func,
  nextQuestion: PropTypes.bool,
  setNextQuestion: PropTypes.func,
  scrollEnabled: PropTypes.bool,
  answerAgain: PropTypes.bool.isRequired,
  sizeAlternatives: PropTypes.number,
};

BoxBackground.defaultProps = {
  updatePage: null,
  style: null,
  isLastPage: () => {},
  setSteps: () => {},
  nextQuestion: false,
  setNextQuestion: () => {},
  scrollEnabled: false,
  sizeAlternatives: 0,
};
export default BoxBackground;
