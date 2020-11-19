import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage} = props;
  const [pagination, setPagination] = useState(0);

  const changePaginationIndex = (event) => {
    const {contentOffset} = event.nativeEvent;

    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const index = Math.floor(contentOffset.x / viewSize.width);
    if (index !== pagination) setPagination(index);
  };

  const convertIndexInProgress = (index) =>
    ((index + 1) * 100) / content.length / 100;

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
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf]),
  isLastPage: PropTypes.func,
};

BoxBackground.defaultProps = {
  style: null,
  isLastPage: () => {},
};
export default BoxBackground;
