const translateRunLenghtCode = (lineBinaryCode) => {

  const translate = []
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