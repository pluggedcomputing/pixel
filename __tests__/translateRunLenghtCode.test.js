import translateRunLenghtCode from '../src/utils/translateRunLenghtCode';

test('deve traduzir [1,0,1,0,0] para run lenght code ', () => {
  const lineBinaryCode = [1, 0, 1, 0, 0];
  const result = translateRunLenghtCode(lineBinaryCode, false);

  expect(result).toEqual([1, 1, 1, 2]);
});

test('deve traduzir [0,0,1,0,0] para run lenght code', () => {
  const lineBinaryCode = [0, 0, 1, 0, 0];
  const result = translateRunLenghtCode(lineBinaryCode, false);

  expect(result).toEqual([0, 2, 1, 2]);
});

test('deve traduzir [0,0,0,0,0] para run lenght code', () => {
  const lineBinaryCode = [0, 0, 0, 0, 0];
  const result = translateRunLenghtCode(lineBinaryCode, false);

  expect(result).toEqual([0, 5]);
});

test('deve traduzir [1,1,1,1,1] para run lenght code', () => {
  const lineBinaryCode = [1, 1, 1, 1, 1];
  const result = translateRunLenghtCode(lineBinaryCode, false);

  expect(result).toEqual([5]);
});

// Test ColorFul

test('deve traduzir [2, 2, 2, 3, 1] para run lenght code colorful', () => {
  const lineBinaryCode = [2, 2, 2, 3, 1];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['3-2', '1-3', '1-1']);
});

test('deve traduzir [1, 3, 3, 0, 1] para run lenght code colorful', () => {
  const lineBinaryCode = [1, 3, 3, 0, 1];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['1-1', '2-3', '1-0', '1-1']);
});

test('deve traduzir [1, 4, 4, 4, 0] para run lenght code colorful', () => {
  const lineBinaryCode = [1, 4, 4, 4, 0];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['1-1', '3-4', '1-0']);
});

test('deve traduzir [4, 2, 4, 2, 2] para run lenght code colorful', () => {
  const lineBinaryCode = [4, 2, 4, 2, 2];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['1-4', '1-2', '1-4', '2-2']);
});

test('deve traduzir [2, 0, 0, 4, 2] para run lenght code colorful', () => {
  const lineBinaryCode = [2, 0, 0, 4, 2];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['1-2', '2-0', '1-4', '1-2']);
});

test('deve traduzir [3, 3, 0, 0, 2] para run lenght code colorful', () => {
  const lineBinaryCode = [3, 3, 0, 0, 2];
  const result = translateRunLenghtCode(lineBinaryCode, true);
  expect(result).toEqual(['2-3', '2-0', '1-2']);
});
