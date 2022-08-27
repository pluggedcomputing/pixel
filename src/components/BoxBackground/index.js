import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';

import group from '../../assets/images/levelSelection/Group.png';
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
  } = props;
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
    if (flatListRef !== null && nextQuestion && !isEndPage && !scrollEnabled) {
      setPagination(indexNext);
      flatListRef.scrollToIndex({index: indexNext});
      setNextQuestion(false);
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
    } else if (!scrollEnabled && currentOffset < offset) {
      changePaginationIndex(event, currentOffset > offset);
    }
  };

  const getIndexCard = (event) => {
    const {contentOffset} = event.nativeEvent;

    const viewSize = event.nativeEvent.layoutMeasurement;

    return contentOffset.x / viewSize.width;
  };

  const changePaginationIndex = (event, direction) => {
    const index = Math.round(getIndexCard(event));

    setIsEndPage(false);

    if (
      (direction && index > pagination) ||
      (!direction && index < pagination)
    ) {
      setSteps(index);
      setPagination(index);
    }
  };

    const RightArrowFunction = async () =>{
      if(pagination !== content.length -1){
       flatListRef.scrollToIndex({index: pagination + 1,Animated:false})
      }
    }
    const LeftArrowFunction = async () =>{
      if(pagination !== 0){
        flatListRef.scrollToIndex({index: pagination- 1,Animated:false})
      }

    }

  const renderItem = ({item}) => {
    return (
      <View style={styles.boxContainer}>
        {item}
        <TouchableOpacity style={styles.buttonImageRotate} onPress={() => LeftArrowFunction()}>
          <Image source={group} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonImage} onPress={() => RightArrowFunction()}>
          <Image source={group} style={styles.image2} />
        </TouchableOpacity>
      </View>
);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
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
