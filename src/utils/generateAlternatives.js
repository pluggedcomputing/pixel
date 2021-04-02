import randomRowValue from './randomRowValue';
import translateRunLenghtCode from './translateRunLenghtCode';

const alternativesContains = (alternatives, alternative) =>{
  for(let i = 0; i < alternatives.length; i +=1) {
    const currentAlternative = alternatives[i]
    if(currentAlternative.length === alternative.length){
      let areEqual = true
      for(let j = 0; j < alternative.length; j +=1) {
        if(currentAlternative[j] !==alternative[j]) {
          areEqual = false
        }
      }
      if(areEqual){
        return true
      }
    }
  }
  return false
}

const generateAlternatives = (lineBinaryCode) => {
  const alternatives = []
  const alternativesObj = []
  const maxAlternatives = 4
  const numColumns = 5

  alternatives.push(translateRunLenghtCode(lineBinaryCode))

  alternativesObj.push({
    id: 1,
    text: alternatives[0].join(),
    correct: true,
  })

  while(alternatives.length !== maxAlternatives) {
    const nextAlternative = randomRowValue(numColumns)
    if(!alternativesContains(alternatives, nextAlternative)){
      alternatives.push(nextAlternative)
    }
  }

  for(let i=1; i<maxAlternatives; i +=1) {
    alternativesObj.push(
      {
        id: i+1,
        text: translateRunLenghtCode(alternatives[i]).join(),
        correct: false,
      },
    )
  }

  return alternativesObj
}

export default generateAlternatives;