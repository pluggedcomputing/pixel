const translateRunLenghtCode = (lineBinaryCodeOrigin, isColorFul) => {
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

  if (lastColor === 0 && !isColorFul) {
    translate.push(0);
  }

  while (lineBinaryCode.length !== 0) {
    const currentColor = lineBinaryCode.shift();
    if (currentColor !== lastColor) {
      const value = isColorFul ? `${count}-${lastColor}` : count;
      translate.push(value);
      count = 1;
      lastColor = currentColor;
    } else {
      count += 1;
    }
  }

  const value = isColorFul ? `${count}-${lastColor}` : count;
  translate.push(value);
  return translate;
};

export default translateRunLenghtCode;
