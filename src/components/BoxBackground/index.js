import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import PropTypes from 'prop-types';

import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage} = props;

  const [pagination, setPagination] = useState(0);

  const changePaginationIndex = (e) => {
    const {contentOffset} = e.nativeEvent;
    const viewSize = e.nativeEvent.layoutMeasurement;

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
        onScroll={(e) => {
          changePaginationIndex(e);
        }}
        renderItem={({item}) => (
          <View key={item.id} style={styles.boxContainer}>
            {item}
          </View>
        )}
      />
      <View style={styles.pagination}>
        {content.map((i, k) => (
          <Text
            key={uuid.v4()}
            style={
              k === pagination ? styles.pagingActiveText : styles.pagingText
            }>
            ▪
          </Text>
        ))}
      </View>
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
