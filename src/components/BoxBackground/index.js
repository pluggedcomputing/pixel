import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import PropTypes from 'prop-types';

import AnimationPagination from './AnimationPagination';
import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage} = props;

  const [pagination, setPagination] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [direction, setDirection] = useState('right');
  const changePaginationIndex = (event) => {
    const {contentOffset} = event.nativeEvent;

    setOffSet(contentOffset.x);
    setDirection(contentOffset.x > offSet ? 'right' : 'left');

    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const index = Math.floor(contentOffset.x / viewSize.width);
    if (index !== pagination) setPagination(index);
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => isLastPage(true)}
        data={content}
        horizontal
        pagingEnabled
        onScroll={(event) => {
          changePaginationIndex(event);
        }}
        renderItem={({item}) => (
          <View key={item.id} style={styles.boxContainer}>
            {item}
          </View>
        )}
      />
      <AnimationPagination
        size={content.length}
        index={pagination}
        direction={direction}
      />
    </View>
  );
};

BoxBackground.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf]),
  isLastPage: PropTypes.func,
};

BoxBackground.defaultProps = {
  style: null,
  isLastPage: () => {},
};
export default BoxBackground;
