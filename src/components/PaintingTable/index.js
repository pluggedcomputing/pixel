import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {PropTypes} from 'prop-types';

import styles from './styles';

const PaintingTable = (props) => {
  const {content, enable, row, column} = props;
  const [colorCurrent, setColorCurrent] = useState('P');
  const [columnCheck, setColumnChecked] = useState('');
  const [rowCheck, setRowChecked] = useState('');
  const [data, setData] = useState([]);

  const updateData = () => {
    setData(mountMatrixColorOrDefault());
  };

  useEffect(() => {
    updateData();
  }, [enable, content]);

  const mountMatrixDefault = () => {
    const columns = [];
    for (let i = 0; i < row; i += 1) {
      const rows = [];
      for (let j = 0; j < column; j += 1) {
        rows.push({key: j, color: 'B'});
      }
      columns.push(rows);
    }
    return columns;
  };

  const checkValueOfContent = (value) => {
    const replaceSpaceToEmpty = value.replace(/ /g, '');
    const replacecommaToEmpty = replaceSpaceToEmpty.replace(/,/g, '');
    return replacecommaToEmpty;
  };

  const organizeText = (text) => {
    const replaceSpaceToEmpty = text.replace(/ /g, '');
    return replaceSpaceToEmpty.replace(/,/g, ', ');
  };

  const mountMatrixColorOrDefault = () => {
    const dataDefault = mountMatrixDefault();
    if (!enable) {
      for (let i = 0; i < row; i += 1) {
        const replaceRows = checkValueOfContent(content[i]);
        for (let j = 0; j < column; j += 1) {
          dataDefault[i][j].color = replaceRows[j] === '0' ? 'P' : 'B';
        }
      }
    }
    return dataDefault;
  };

  const handleOnPress = (rowCurrent, keyCurrent) => {
    setRowChecked(rowCurrent);
    setColumnChecked(keyCurrent);
    data[rowCurrent][keyCurrent].color = colorCurrent;
  };

  const choiceColor = (colorSquire) => {
    setRowChecked('');
    setColumnChecked('');
    setColorCurrent(colorSquire);
  };

  const chosenSquare = (color) => {
    return colorCurrent === color ? styles.squareChoice : null;
  };

  const paint = (color) => {
    switch (color) {
      case 'P' || 1:
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
            {organizeText(item)}
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

  return (
    <View style={[styles.container]}>
      <View style={styles.subContainer}>
        <View>
          <View>
            {data.map((rows, index) => (
              <View key={String(index)} style={{flexDirection: 'row'}}>
                {rows.map((columnOfRow, indexKey) => (
                  <TouchableOpacity
                    key={String(indexKey)}
                    onPress={() => {
                      if (enable) handleOnPress(index, columnOfRow.key);
                    }}>
                    <View
                      style={[
                        styles.square,
                        paint(
                          rowCheck !== '' &&
                            rowCheck === index &&
                            columnCheck !== '' &&
                            columnCheck === columnOfRow.key
                            ? colorCurrent
                            : columnOfRow.color,
                        ),
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
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
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
};

PaintingTable.defaultProps = {
  enable: true,
};

export default PaintingTable;
