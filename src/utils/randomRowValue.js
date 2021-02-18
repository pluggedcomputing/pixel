  const RandomRowValue = (numColumn, correctValue) => {
    const MIN = 0;
    const MAX = 100;
    let value = "";

    for(let i = 0; i < numColumn; i += 1){
      const valueRandom = Math.floor(Math.random() * (MAX - MIN)) + MIN;
      value += `${valueRandom % 2}`;
      if(i < numColumn - 1){
        value += ',';
      }
    }

    if(value === correctValue) RandomRowValue(numColumn, correctValue);

    return value;
  }

  export default RandomRowValue;