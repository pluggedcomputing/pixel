/* eslint-disable import/no-unresolved */
const imagens = {
  // nivel1
  l1q1: require('../assets/images/level1/phase-1-image-1.png'),
  l1q2: require('../assets/images/level1/phase-1-image-2.png'),
  l1q3: require('../assets/images/level1/phase-1-image-3.png'),
  l1q4: require('../assets/images/level1/phase-1-image-4.png'),
  l1q5: require('../assets/images/level1/fax.png'),
  l1q7: require('../assets/images/level1/faxOut.png'),
  // nivel2
  l2q1: require('../assets/images/level2/phase-2-image-1.png'),
  l2q2: require('../assets/images/level2/phase-2-image-2.png'),
  // nivel3
  l3q1: require('../assets/images/level3/phase-3-image-1.png'),
  l3q2: require('../assets/images/level3/phase-3-image-2.png'),
  l3q3: require('../assets/images/level3/phase-3-image-3.png'),
  l3q4: require('../assets/images/level3/phase-3-image-4.png'),
  l3q5: require('../assets/images/level3/phase-3-image-5.png'),
  // fase4
  l4q1: require('../assets/images/level4/phase-4-image-1.png'),
  l4q2: require('../assets/images/level4/phase-4-image-2.png'),
  l4q3: require('../assets/images/level4/phase-4-image-3.png'),
  l4q4: require('../assets/images/level4/phase-4-image-4.png'),
};

const getImage = (type) => {
  return imagens[type];
};

export default getImage;
