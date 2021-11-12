/* eslint-disable no-param-reassign */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {PropTypes} from 'prop-types';

import styles from './styles';

const PaintingTable = (props) => {
  const {
    content,
    enable,
    row,
    column,
    invisibleRow,
    isContentReduced,
    paintingFreely,
    setAnswerPaint,
    isDemonstration,
    lackRowPixel,
    setClickButtonFirst,
    minPaintPixel,
    isColorFul,
  } = props;
  const [columnCheck, setColumnChecked] = useState('');
  const [rowCheck, setRowChecked] = useState('');
  const [data, setData] = useState([]);
  const colors = [0, 1, 2, 3, 4]; // "Red": 2, "Green",: 3 "Blue": 4, "Black": 0, "White": 1
  const [colorFul, setcolorFul] = useState();

  const updateData = () => {
    setData(mountMatrixColorOrDefault());
  };

  useEffect(() => {
    updateData();
    setClickButtonFirst(undefined);
  }, [enable, content]);

  const getColorfulCurrent = (currentColor) => {
    if (isColorFul) {
      return currentColor < 4 ? currentColor + 1 : 0;
    }
    return currentColor < 1 ? currentColor + 1 : 0;
  };

  const paintColorFul = (valueColor) => {
    switch (valueColor) {
      case 1:
        return styles.discolorSquare;
      case 2:
        return styles.squareRed;
      case 3:
        return styles.squareGreen;
      case 4:
        return styles.squareBlue;
      default:
        return styles.squareColoring;
    }
  };

  const mountSqureColor = () => {
    if (isColorFul) {
      return (
        <View style={styles.containerFooter}>
          <View style={styles.containerChoiceColor}>
            {colors.map((item) => (
              <View key={item} style={styles.containerBoxColor}>
                <TouchableOpacity
                  onPress={() => {
                    choiceColorFul(item !== colorFul ? item : undefined);
                  }}>
                  <View
                    style={[
                      styles.square,
                      paintColorFul(item),
                      item !== colorFul ? null : styles.squareChoice,
                    ]}
                  />
                </TouchableOpacity>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return null;
  };

  const mountMatrixDefault = () => {
    const numRow = isDemonstration ? 1 : row;
    const columns = [];
    for (let i = 0; i < numRow; i += 1) {
      const rows = [];
      for (let j = 0; j < column; j += 1) {
        rows.push(colors[1]);
      }
      columns.push(rows);
    }
    setRowChecked('');
    setColumnChecked('');
    return columns;
  };

  const mountMatrixAnswerPaint = (contentData) => {
    const answerDefault = [];
    contentData.forEach((item) => {
      const rows = item.map((dataValue) => {
        return dataValue;
      });
      answerDefault.push(rows);
    });

    return answerDefault;
  };

  const desablePixles = (
    contentData,
    indexRow,
    indexElementColumn,
    paintPixel,
  ) => {
    if (lackRowPixel) {
      const colorDefault = colors[1];
      const object = lackRowPixel.find(
        (itemObject) => itemObject.row === indexRow,
      );
      const findIndex = object
        ? object.excerptsColumn.includes(indexElementColumn)
        : false;

      if (findIndex) {
        contentData[indexRow][indexElementColumn] = colorDefault;
      } else {
        contentData[indexRow][indexElementColumn] = paintPixel;
      }
    } else {
      contentData[indexRow][indexElementColumn] = paintPixel;
    }
  };

  const mountMatrixColorOrDefault = () => {
    let result;
    const dataDefault = mountMatrixDefault();
    if (paintingFreely) {
      result = mountMatrixAnswerPaint(dataDefault);
      if (result.length > 0) {
        setAnswerPaint(result);
      }
    }

    if (!enable || lackRowPixel) {
      if (isContentReduced) {
        content.forEach((itemRunLength, i) => {
          let columnIndex = 0;
          if (i < content.length) {
            itemRunLength.forEach((item, index) => {
              let cont = 0;
              let valueColumn = item;
              let colorItem = index % 2 === 0 ? 1 : 0; // TODO: melhorar essa parte do código, pois foi necessario inverter os valores para pintar corretamente
              if (isColorFul) {
                const [color, valueColor] = item.split('-');
                valueColumn = color;
                colorItem = parseInt(valueColor, 10);
              }
              while (cont < valueColumn) {
                if (columnIndex < column) {
                  desablePixles(dataDefault, i, columnIndex, colorItem);
                  columnIndex += 1;
                }
                cont += 1;
              }
            });
          }
        });
      } else {
        content.forEach((item, indexRow) => {
          item.forEach((element, indexElementColumn) => {
            desablePixles(dataDefault, indexRow, indexElementColumn, element);
          });
        });
      }
    }
    return dataDefault;
  };

  const handleOnPress = (rowCurrent, keyCurrent) => {
    cleanColorChecked();
    const colorFulCurrent = getColorfulCurrent(data[rowCurrent][keyCurrent]);
    if (isColorFul) {
      if (
        data[rowCurrent][keyCurrent] === colorFul ||
        colorFul === undefined ||
        (data[rowCurrent][keyCurrent] !== colorFul &&
          rowCurrent === rowCheck &&
          keyCurrent === columnCheck)
      ) {
        data[rowCurrent][keyCurrent] = colorFulCurrent;
      } else {
        data[rowCurrent][keyCurrent] = colorFul;
      }
    } else {
      data[rowCurrent][keyCurrent] = colorFulCurrent;
    }
    const resultClick = mountMatrixAnswerPaint(data);

    setAnswerPaint(resultClick);

    if (countPixelColorFul(data)) {
      setClickButtonFirst(true);
    } else {
      setClickButtonFirst(false);
    }

    setRowChecked(rowCurrent);
    setColumnChecked(keyCurrent);
  };

  const cleanColorChecked = () => {
    setRowChecked('');
    setColumnChecked('');
  };

  const choiceColorFul = (color) => {
    setcolorFul(color);
  };

  const countPixelColorFul = (list) => {
    let count = -1;
    let isChecked = false;
    do {
      count += 1;
      const countPixel = Array.from(list[count]).filter((subItem) => {
        return subItem !== 1;
      });
      if (countPixel.length > minPaintPixel) {
        isChecked = true;
      }
    } while (count < list.length - 1);
    return isChecked;
  };

  const findKeyRow = (currentKey) => {
    if (!invisibleRow || invisibleRow === -1) return false;
    return invisibleRow.find((item) => item === currentKey) !== undefined;
  };

  const mountText = () => {
    return !paintingFreely ? (
      <View style={styles.containerText}>
        {content.map((item, key) => (
          <Text key={key.toString()} style={styles.text}>
            {findKeyRow(key) ? '' : item.toString()}
          </Text>
        ))}
      </View>
    ) : null;
  };

  const mountRow = (indexKey, index, columnOfRow) => {
    return (
      <TouchableOpacity
        key={String(indexKey)}
        onPress={() => {
          if (enable || isDemonstration) handleOnPress(index, indexKey);
        }}>
        <View style={[styles.square, paintColorFul(columnOfRow)]} />
      </TouchableOpacity>
    );
  };

  const mountTextModify = () => {
    const subData = data[0] !== undefined ? data[0] : [];
    return (
      <View style={styles.containerTextModify}>
        {subData.map((item, key) => (
          <Text key={key.toString()} style={styles.text}>
            {item}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.subContainer}>
        <View>
          <View>
            {data.map((rows, index) => (
              <View key={String(index)} style={{flexDirection: 'row'}}>
                {rows.map((columnOfRow, indexKey) =>
                  mountRow(indexKey, index, columnOfRow),
                )}
              </View>
            ))}
            {isDemonstration ? mountTextModify() : null}
          </View>
        </View>
        {isDemonstration ? null : mountText()}
      </View>
      {mountSqureColor()}
    </View>
  );
};

PaintingTable.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array]),
  enable: PropTypes.bool,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  invisibleRow: PropTypes.arrayOf(PropTypes.number),
  isContentReduced: PropTypes.bool,
  paintingFreely: PropTypes.bool,
  setAnswerPaint: PropTypes.func,
  isDemonstration: PropTypes.bool,
  lackRowPixel: PropTypes.PropTypes.arrayOf(PropTypes.object), // [{"excerptsColumn":[], "row":}],
  setClickButtonFirst: PropTypes.func,
  minPaintPixel: PropTypes.number,
  isColorFul: PropTypes.bool,
};

PaintingTable.defaultProps = {
  content: [],
  enable: true,
  invisibleRow: null,
  isContentReduced: true,
  paintingFreely: false,
  setAnswerPaint: () => {},
  isDemonstration: false,
  lackRowPixel: null,
  setClickButtonFirst: () => undefined,
  minPaintPixel: 1,
  isColorFul: false,
};

export default PaintingTable;
