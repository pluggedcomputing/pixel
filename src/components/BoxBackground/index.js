import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage, updatePage, setSteps, nextQuestion, setNextQuestion, scrollEnabled} = props;
  const [pagination, setPagination] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isEndPage, setIsEndPage] = useState(false);
  let flatListRef = null;

  useEffect(() => {
    if (flatListRef !== null && updatePage !== null) {
      flatListRef.scrollToIndex({index: 0});
    }
  }, [updatePage]);

  useEffect(() => {
    const indexNext = pagination + 1;
    if (flatListRef !== null && nextQuestion && !isEndPage) {
      flatListRef.scrollToIndex({index: indexNext});
    }
  }, [nextQuestion])

  const checkDireciton = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    setOffset(currentOffset);
    if(currentOffset > offset && !scrollEnabled && flatListRef !== null && !nextQuestion){
      flatListRef.scrollToIndex({index: pagination});
    }else{
      changePaginationIndex(event);
      if(nextQuestion) setNextQuestion(false);
    }
  }

  const changePaginationIndex = (event) => {
    const {contentOffset} = event.nativeEvent;

    const viewSize = event.nativeEvent.layoutMeasurement;

    const index = Math.round(contentOffset.x / viewSize.width);

    if (index !== pagination) {
      setSteps(index);
      setPagination(index)};
  };

  const convertIndexInProgress = (index) =>
    ((index + 1) * 100) / content.length / 100;

  const renderItem = ({item}) => {
    return <View style={styles.boxContainer}>{item}</View>;
  };

  return (
    <View style={[styles.container, style]}>
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
};

BoxBackground.defaultProps = {
  updatePage: null,
  style: null,
  isLastPage: () => {},
  setSteps: () => {},
  nextQuestion: false,
  setNextQuestion: () => {},
  scrollEnabled: false,
};
export default BoxBackground;
