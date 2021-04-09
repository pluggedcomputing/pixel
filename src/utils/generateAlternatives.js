/* eslint-disable no-plusplus */
import randomRowValue from './randomRowValue';
import translateRunLenghtCode from './translateRunLenghtCode';


const alternativesContains = (alternatives, alternative) => {
  const alternativeMapResult = alternatives.map(item => {
    const isSame = item.toString() === alternative.toString()
    return isSame
  })
  return alternativeMapResult.includes(true)
}

const generateAlternatives = (lineBinaryCode) => {
  if(!lineBinaryCode || lineBinaryCode.length === 0) return [];
  const alternatives = []
  const alternativesObj = []
  const maxAlternatives = 4
  const numColumns = 5
  alternatives.push(translateRunLenghtCode(lineBinaryCode[0]))
  alternativesObj.push({
    id: 1,
    text: alternatives[0].join(),
    correct: true,
  })

  while(alternatives.length !== maxAlternatives) {
    const nextAlternative = translateRunLenghtCode(randomRowValue(numColumns))
    if(!alternativesContains(alternatives, nextAlternative)){
      alternatives.push(nextAlternative)
    }
  }

  for(let i=1; i<maxAlternatives; i ++) {
    alternativesObj.push(
      {
        id: i+1,
        text: alternatives[i].join(),
        correct: false,
      },
    )
  }
  return alternativesObj
}

export default generateAlternatives;