import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import PropTypes from 'prop-types';

import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage} = props;

  const height = 300;

  const [pagination, setPagination] = useState(0);

  const changePaginationIndex = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const index = Math.floor(offset / height);
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
