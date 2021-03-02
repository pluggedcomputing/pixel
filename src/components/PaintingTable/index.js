import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {PropTypes} from 'prop-types';

import styles from './styles';

const PaintingTable = (props) => {
  const {content, enable, row, column, invisibleRow, isContentReduced, paintingFreely, setAnswerPaint} = props;
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
    setRowChecked('');
    setColumnChecked('');
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

  const mountMatrixAnswerPaint = (contentData) => {
    const answerDefault = [];
    contentData.forEach(item =>{
      let rows = "";
      item.forEach((dataValue, index) => {
        rows += dataValue.color === "B" ? "1" : "0";
        if(index < item.length - 1){
          rows += ",";
        }
      })
      if(item[0].color === "P" && isContentReduced){
        rows = `0,${rows}`;
      }
      answerDefault.push(rows);
    });

    return answerDefault;
  };

  const mountMatrixColorOrDefault = () => {
    const dataDefault = mountMatrixDefault();
    if(paintingFreely) setAnswerPaint(mountMatrixAnswerPaint(dataDefault));
    if (!enable) {
      if (isContentReduced) {
        for (let i = 0; i < row; i += 1) {
          let columnIndex = 0;
          if (i < content.length) {
            const replaceRows = checkValueOfContent(content[i]).split('');
            const invertColor = i === 0 && replaceRows[i] === 0;

            replaceRows.map((item, index) => {
              let cont = 0;
              while (cont < item) {
                if (columnIndex <= column - 1) {
                  const colorItem = index % 2 === 0 && !invertColor ? 'B' : 'P';
                  dataDefault[i][columnIndex].color = colorItem;
                  columnIndex += 1;
                }
                cont += 1;
              }
              return true;
            });
          }
        }
      } else {
        for (let i = 0; i < row; i += 1) {
          const replaceRows = checkValueOfContent(content[i]);
          for (let j = 0; j < column; j += 1) {
            dataDefault[i][j].color = replaceRows[j] !== '0' ? 'B' : 'P';
          }
        }
      }
    }
    return dataDefault;
  };

  const handleOnPress = (rowCurrent, keyCurrent) => {
    setRowChecked(rowCurrent);
    setColumnChecked(keyCurrent);
    data[rowCurrent][keyCurrent].color = colorCurrent;
    if(paintingFreely) setAnswerPaint(mountMatrixAnswerPaint(data));
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
    return !paintingFreely ? (
      <View style={styles.containerText}>
        {content.map((item, key) => (
          <Text key={key.toString()} style={styles.text}>
            {invisibleRow !== -1 && key === invisibleRow ? '' : organizeText(item)}
          </Text>
        ))}
      </View>
    ) : null;
  };

  const mountSqureColor = () => {
    if (enable) {
      return (
        <View style={styles.containerFooter}>
          <View style={styles.containerChoiceColor}>
            <TouchableOpacity onPress={() => choiceColor('P')}>
              <View
                style={[
                  styles.square,
                  chosenSquare('P'),
                  styles.squareColoring,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => choiceColor('B')}>
              <View
                style={[
                  styles.square,
                  chosenSquare('B'),
                  styles.discolorSquare,
                ]}
              />
            </TouchableOpacity>
          </View>
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
  content: PropTypes.arrayOf(PropTypes.string),
  enable: PropTypes.bool,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  invisibleRow: PropTypes.number,
  isContentReduced: PropTypes.bool,
  paintingFreely: PropTypes.bool,
  setAnswerPaint: PropTypes.func,
};

PaintingTable.defaultProps = {
  content: [],
  enable: true,
  invisibleRow: -1,
  isContentReduced: true,
  paintingFreely: false,
  setAnswerPaint: () => {},
};

export default PaintingTable;
