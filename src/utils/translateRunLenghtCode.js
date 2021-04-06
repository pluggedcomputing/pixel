/* eslint-disable no-console */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
const translateRunLenghtCode = (lineBinaryCodeOrigin) => {
  let lineBinaryCodeList = []

  lineBinaryCodeList.push(lineBinaryCodeOrigin)

  if(lineBinaryCodeList.length === 0 || lineBinaryCodeList[0].length === 0){
    return []
  }

  console.log("lineBinaryCode list---", lineBinaryCodeList)

  let lineBinaryCode = lineBinaryCodeList[0]

  const translate = []

  //const lineBinaryCode = [...lineBinaryCodeList[0]]

  console.log("lineBinaryCode 0---", lineBinaryCode)
  // console.log("lineBinaryCode 1---", lineBinaryCode[1])
  let count = 1
  let lastColor = lineBinaryCode.shift()

  // Analisar se começa com branco ou preto, caso comec

  if(lastColor === 0 ){
    translate.push(0)
  }

  while(lineBinaryCode.length !== 0) {

    const currentColor = lineBinaryCode.shift()
    if(currentColor !== lastColor) {
      translate.push(count)
      count = 1
      lastColor = currentColor
    } else {
      count +=1
    }
  }

  translate.push(count)
  return translate
}

export default translateRunLenghtCode;