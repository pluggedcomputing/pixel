import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {PropTypes} from 'prop-types';

import styles from './styles';

const PaintingTable = (props) => {
  const {content, enable, size, setAnswer} = props;
  const [colorCurrent, setColorCurrent] = useState('P');
  const [indexChecked, setIndexChecked] = useState('');

  const mountMatrixDefault = () => {
    const newList = [];
    for (let i = 0; i < size * size; i += 1) {
      newList.push({key: i, color: 'B'});
    }
    return newList;
  };

  const mountMatrixColor = () => {
    let contKey = 0;
    const objList = [];
    content.map((item) => {
      const listItem = item.split(', ');
      return listItem.map((data, index) => {
        let cont = 0;
        const newValue = !data ? size : data;

        while (cont < newValue) {
          const colorItem = index % 2 === 0 ? 'B' : 'P';
          objList.push({key: contKey, color: colorItem});
          contKey += 1;
          cont += 1;
        }
        return true;
      });
    });

    return objList;
  };

  const [data] = useState(enable ? mountMatrixDefault() : mountMatrixColor());

  const handleOnPress = (keyCurrent) => {
    if (enable) setAnswer(data);
    const objIndex = data.findIndex((obj) => obj.key === keyCurrent);
    data[objIndex].color = colorCurrent;
    setAnswer(data);
  };

  const choiceColor = (colorSquire) => {
    setIndexChecked('');
    setColorCurrent(colorSquire);
  };

  const chosenSquare = (color) => {
    return colorCurrent === color ? styles.squareChoice : null;
  };

  const paint = (color) => {
    switch (color) {
      case 'P':
        return styles.squareColoring;
      default:
        return styles.discolorSquare;
    }
  };

  const mountText = () => {
    return (
      <View style={styles.containerText}>
        {content.map((item, key) => (
          <Text key={key.toString()} style={styles.text}>
            {item}
          </Text>
        ))}
      </View>
    );
  };

  const mountSqureColor = () => {
    if (enable) {
      return (
        <View style={styles.containerChoiceColor}>
          <TouchableOpacity onPress={() => choiceColor('P')}>
            <View
              style={[styles.square, chosenSquare('P'), styles.squareColoring]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => choiceColor('B')}>
            <View
              style={[styles.square, chosenSquare('B'), styles.discolorSquare]}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (enable) handleOnPress(item.key);
        }}>
        <View
          style={[
            styles.square,
            paint(
              indexChecked !== '' && indexChecked === item.key
                ? colorCurrent
                : item.color,
            ),
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.subContainer}>
        <View>
          <FlatList data={data} renderItem={renderItem} numColumns={size} />
        </View>
        {mountText()}
      </View>
      {mountSqureColor()}
    </View>
  );
};

PaintingTable.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  enable: PropTypes.bool,
  size: PropTypes.number,
  setAnswer: PropTypes.func,
};

PaintingTable.defaultProps = {
  enable: true,
  size: 8,
  setAnswer: () => {},
};

export default PaintingTable;
