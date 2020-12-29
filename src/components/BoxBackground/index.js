import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage, updatePage} = props;
  const [pagination, setPagination] = useState(0);

  let flatListRef = null;

  useEffect(() => {
    if (flatListRef !== null && updatePage !== null) {
      flatListRef.scrollToIndex({index: 0});
    }
  }, [updatePage]);

  const changePaginationIndex = (event) => {
    const {contentOffset} = event.nativeEvent;

    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const index = Math.floor(contentOffset.x / viewSize.width);
    if (index !== pagination) setPagination(index);
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
        }}
        horizontal
        pagingEnabled
        onScroll={(event) => {
          changePaginationIndex(event);
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
};

BoxBackground.defaultProps = {
  updatePage: null,
  style: null,
  isLastPage: () => {},
};
export default BoxBackground;
