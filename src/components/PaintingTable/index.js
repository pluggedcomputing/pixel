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
  } = props;
  const [colorCurrent, setColorCurrent] = useState(false); // branco = true, preto = false
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
    const numRow = isDemonstration ? 1 : row;
    const columns = [];
    for (let i = 0; i < numRow; i += 1) {
      const rows = [];
      for (let j = 0; j < column; j += 1) {
        rows.push({key: j, color: true});
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
        return dataValue.color ? 1 : 0;
      });
      answerDefault.push(rows);
    });

    return answerDefault;
  };

  const mountMatrixColorOrDefault = () => {
    const dataDefault = mountMatrixDefault();
    if (paintingFreely) {
      const result = mountMatrixAnswerPaint(dataDefault);
      if (result.length > 0) {
        setAnswerPaint(result);
      }
    }

    if (!enable) {
      if (isContentReduced) {
        content.forEach((itemRunLength, i) => {
          let columnIndex = 0;
          if (i < content.length) {
            itemRunLength.forEach((item, index) => {
              let cont = 0;
              while (cont < item) {
                if (columnIndex < column) {
                  const colorItem = index % 2 === 0;
                  dataDefault[i][columnIndex].color = colorItem;
                  columnIndex += 1;
                }
                cont += 1;
              }
            });
          }
        });
      } else {
        content.forEach((item, index) => {
          item.forEach((element, indexElement) => {
            dataDefault[index][indexElement].color = element === 1;
          });
        });
      }
    }
    return dataDefault;
  };

  const handleOnPress = (rowCurrent, keyCurrent) => {
    const colorItemCurent = data[rowCurrent][keyCurrent].color;
    choiceColor(!colorItemCurent);
    setRowChecked(rowCurrent);
    setColumnChecked(keyCurrent);
    data[rowCurrent][keyCurrent].color = !colorItemCurent;
    const resultClick = mountMatrixAnswerPaint(data);
    setAnswerPaint(resultClick);
  };

  const choiceColor = (colorSquire) => {
    setRowChecked('');
    setColumnChecked('');
    setColorCurrent(colorSquire);
  };

  const paint = (color) => {
    return color ? styles.discolorSquare : styles.squareColoring;
  };

  const mountText = () => {
    return !paintingFreely ? (
      <View style={styles.containerText}>
        {content.map((item, key) => (
          <Text key={key.toString()} style={styles.text}>
            {invisibleRow !== -1 && key === invisibleRow ? '' : item.toString()}
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
    );
  };

  const mountTextModify = () => {
    const subData = data[0];
    return (
      <View style={styles.containerTextModify}>
        {subData.map((item) => (
          <Text style={styles.text}>{`${item.color ? '0' : '1'}`}</Text>
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
    </View>
  );
};

PaintingTable.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array]),
  enable: PropTypes.bool,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  invisibleRow: PropTypes.number,
  isContentReduced: PropTypes.bool,
  paintingFreely: PropTypes.bool,
  setAnswerPaint: PropTypes.func,
  isDemonstration: PropTypes.bool,
};

PaintingTable.defaultProps = {
  content: [],
  enable: true,
  invisibleRow: -1,
  isContentReduced: true,
  paintingFreely: false,
  setAnswerPaint: () => {},
  isDemonstration: false,
};

export default PaintingTable;
