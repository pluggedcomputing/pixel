const translateRunLenghtCode = (lineBinaryCodeOrigin) => {
  const lineBinaryCodeList = [];
  const auxLineBinary = [...lineBinaryCodeOrigin];

  lineBinaryCodeList.push(auxLineBinary);

  if (lineBinaryCodeList.length === 0 || lineBinaryCodeList[0].length === 0) {
    return [];
  }

  const lineBinaryCode = lineBinaryCodeList[0];

  const translate = [];

  let count = 1;
  let lastColor = lineBinaryCode.shift();

  if (lastColor === 0) {
    translate.push(0);
  }

  while (lineBinaryCode.length !== 0) {
    const currentColor = lineBinaryCode.shift();
    if (currentColor !== lastColor) {
      translate.push(count);
      count = 1;
      lastColor = currentColor;
    } else {
      count += 1;
    }
  }

  translate.push(count);
  return translate;
};

export default translateRunLenghtCode;
