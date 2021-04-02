import generateAlternatives from '../src/utils/generateAlternatives'

test("gerar alternativas", () =>{
  const lineBinaryCode = [1,0,1,0,0]
  const result = generateAlternatives(lineBinaryCode)

  expect(result[0].text).toBe("1,1,1,2")
  expect(alternativesAreDifferent(result)).toBeTruthy()
})

test("deve traduzir [0,0,1,0,0] para run lenght code", () =>{
  const lineBinaryCode = [0,0,1,0,0]
  const result = generateAlternatives(lineBinaryCode)
  expect(result[0].text).toBe("0,2,1,2")
  expect(alternativesAreDifferent(result)).toBeTruthy()
})

test("deve traduzir [0,0,0,0,0] para run lenght code", () =>{
  const lineBinaryCode = [0,0,0,0,0]
  const result = generateAlternatives(lineBinaryCode)

  expect(result[0].text).toBe("0,5")
  expect(alternativesAreDifferent(result)).toBeTruthy()
})

test("deve traduzir [1,1,1,1,1] para run lenght code", () =>{
  const lineBinaryCode = [1,1,1,1,1]
  const result = generateAlternatives(lineBinaryCode)

  expect(result[0].text).toBe("5")
  expect(alternativesAreDifferent(result)).toBeTruthy()
})


const alternativesAreDifferent = (result) =>{
  for(let i = 0; i < result.length; i+=1) {
    const currentText = result[i].text
    for(let j = 0; j < result.length; j+=1) {
      if(i!==j && currentText === result[j].text) {
        return false
      }
    }
  }
  return true
}