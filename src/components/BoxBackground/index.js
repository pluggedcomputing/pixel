import React from 'react';
import {View, FlatList} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const BoxBackground = (props) => {
  const {content, style, isLastPage} = props;

  const changePaginationIndex = (index) =>
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
        renderItem={({item, index}) => (
          <View key={item.id} style={styles.boxContainer}>
            {item}
            <View style={styles.progressBar}>
              <ProgressBar
                progress={changePaginationIndex(index)}
                color={colors.colorAccent}
              />
            </View>
          </View>
        )}
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
