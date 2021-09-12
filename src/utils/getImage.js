/* eslint-disable import/no-unresolved */
const imagens = {
  // nivel1
  l1q1: require('../assets/images/level1/gitComputer.gif'),
  l1q2: require('../assets/images/level1/photoPixel.png'),
  l1q3: require('../assets/images/level1/ballPixel.png'),
  l1q4: require('../assets/images/level1/grid.png'),
  l1q5: require('../assets/images/level1/fax.png'),
  l1q6: require('../assets/images/level1/faxIn.gif'),
  l1q7: require('../assets/images/level1/faxOut.gif'),
  // nivel2
  l2q1: require('../assets/images/level2/dog.png'),
  l2q2: require('../assets/images/level2/Cgrade.png'),
  // nivel3
  l3q1: require('../assets/images/level3/bit.png'),
  l3q2: require('../assets/images/level3/convert.png'),
  l3q3: require('../assets/images/level3/heart.png'),
  l3q4: require('../assets/images/level3/exGrid.png'),
};

const getImage = (type) => {
  return imagens[type];
};

export default getImage;
