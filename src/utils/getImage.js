/* eslint-disable import/no-unresolved */
const imagens = {
  l1q1: require('../assets/images/Level1/Cpixelbin.png'),
  l1q2: require('../assets/images/Level1/fax.jpg'),
  l1q3: require('../assets/images/Level1/fax_transparent.png'),
  l2q1: require('../assets/images/level2/representationPixel.png'),
};

const getImage = (type) => {
  return imagens[type];
};

export default getImage;
