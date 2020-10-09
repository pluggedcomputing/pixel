import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {PropTypes} from 'prop-types';

import styles from './styles';

const PaintingTable = (props) => {
  const {content, enable} = props;
  const [colorCurrent, setColorCurrent] = useState('P');
  const [indexChecked, setIndexChecked] = useState('');

  const mountMatrixDefault = () => {
    const newList = [];
    for (let i = 0; i < 64; i += 1) {
      newList.push({key: i, color: 'B'});
    }
    return newList;
  };

  const convertStringToObject = () => {
    const objList = content.map((item) => {
      const listItem = item.split(', ');
      return listItem.map((data) => {
        const objItem = {qt: 0, color: ''};
        const itemCurrent = data.split('');
        [objItem.qt, objItem.color] = !data ? '8,B' : itemCurrent;
        return objItem;
      });
    });

    return objList;
  };

  const mountMatrixColor = () => {
    const objList = convertStringToObject();

    const newList = [];

    let contKey = 0;

    objList.forEach((item) => {
      item.forEach((data) => {
        let cont = 0;
        while (cont < data.qt) {
          newList.push({key: contKey, color: data.color});
          contKey += 1;
          cont += 1;
        }
      });
    });

    return newList;
  };

  const [data] = useState(enable ? mountMatrixDefault() : mountMatrixColor());

  const handleOnPress = (keyCurrent) => {
    setIndexChecked(keyCurrent);
    const objIndex = data.findIndex((obj) => obj.key === keyCurrent);
    data[objIndex].color = colorCurrent;
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
          <FlatList data={data} renderItem={renderItem} numColumns={8} />
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
};

PaintingTable.defaultProps = {
  enable: true,
};

export default PaintingTable;
