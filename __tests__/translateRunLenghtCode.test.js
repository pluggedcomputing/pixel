import translateRunLenghtCode from '../src/utils/translateRunLenghtCode'

test("deve traduzir [1,0,1,0,0] para run lenght code ", () =>{
  const lineBinaryCode = [1,0,1,0,0]
  const result = translateRunLenghtCode(lineBinaryCode)

  expect(result).toEqual([1,1,1,2])
})

test("deve traduzir [0,0,1,0,0] para run lenght code", () =>{
  const lineBinaryCode = [0,0,1,0,0]
  const result = translateRunLenghtCode(lineBinaryCode)

  expect(result).toEqual([0,2,1,2])
})

test("deve traduzir [0,0,0,0,0] para run lenght code", () =>{
  const lineBinaryCode = [0,0,0,0,0]
  const result = translateRunLenghtCode(lineBinaryCode)

  expect(result).toEqual([0,5])
})

test("deve traduzir [1,1,1,1,1] para run lenght code", () =>{
  const lineBinaryCode = [1,1,1,1,1]
  const result = translateRunLenghtCode(lineBinaryCode)

  expect(result).toEqual([5])
})