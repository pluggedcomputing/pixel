  const randomRowValue = (numColumn) => {
    const MIN = 0;
    const MAX = 100;
    const value = [];

    for(let i = 0; i < numColumn; i += 1){
      const valueRandom = Math.floor(Math.random() * (MAX - MIN)) + MIN;
      value.push(valueRandom % 2)
    }
    return value;
  }

  export default randomRowValue;