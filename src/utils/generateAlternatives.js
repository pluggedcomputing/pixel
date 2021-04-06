/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import randomRowValue from './randomRowValue';
import translateRunLenghtCode from './translateRunLenghtCode';


const alternativesContains = (alternatives, alternative) => {
  const alternativeMapResult = alternatives.map(item => {
    const isSame = item.toString() === alternative.toString() // '[1, 1, 0, 1]' === '[1, 0, 1, 1]'
    return isSame
  })
  return alternativeMapResult.includes(true)
}

// const alternativesContains = (alternatives, alternative) =>{

//   let contains = false
//   for(let i = 0; i < alternatives.length; i ++) {
//     const currentAlternative = alternatives[i]

//     console.log(` current alternative: ++${currentAlternative}`)
//     console.log(` lenght current alternative: ++${currentAlternative.length}`)

//     console.log(` next alternative: --${alternative}`)
//     console.log(` lenght next alternative: --${alternative.length}`)

//     if(currentAlternative.length === alternative.length){

//       let areEqual = true

//       for(let j = 0; j < alternative.length; j ++) {
//         if(currentAlternative[j] !== alternative[j]) {
//           console.log(` next alternative diferente: --${alternative}`)
//           areEqual = false
//           break
//         }
//       }
//       if(areEqual){
//         console.log(` Foram iguais: --${alternative}`)
//         contains = true
//         break
//       }
//     }
//   }
//   return contains
// }

const generateAlternatives = (lineBinaryCode) => {
  console.log(lineBinaryCode)

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