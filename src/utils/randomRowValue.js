const randomRowValue = (numColumn) => {
  const MIN = 0;
  const MAX = 100;
  const value = [];
  const valueDiv = 2;
  for (let i = 0; i < numColumn; i += 1) {
    const valueRandom = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    value.push(valueRandom % valueDiv);
  }
  return value;
};

export default randomRowValue;
