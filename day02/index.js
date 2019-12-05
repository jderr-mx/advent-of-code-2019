const INPUT = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,10,19,23,2,9,23,27,1,6,27,31,1,10,31,35,1,35,10,39,1,9,39,43,1,6,43,47,1,10,47,51,1,6,51,55,2,13,55,59,1,6,59,63,1,10,63,67,2,67,9,71,1,71,5,75,1,13,75,79,2,79,13,83,1,83,9,87,2,10,87,91,2,91,6,95,2,13,95,99,1,10,99,103,2,9,103,107,1,107,5,111,2,9,111,115,1,5,115,119,1,9,119,123,2,123,6,127,1,5,127,131,1,10,131,135,1,135,6,139,1,139,5,143,1,143,9,147,1,5,147,151,1,151,13,155,1,5,155,159,1,2,159,163,1,163,6,0,99,2,0,14,0];

const currentIndex = 0;
const inputLen = 4;
let input;
const parseInput = (index) => {
  if(index > input.length || input[index] === 99) {
    return;
  }
  let nextIndex = index + inputLen;
  const inputSlice = input.slice(index, nextIndex);
  calcSlice(inputSlice);
  parseInput(nextIndex);
}

const calcSlice = (inputSlice) => {
  const [opCode, numberOnePosition, numberTwoPosition, resultPosition] = inputSlice;
  const numberOne = input[numberOnePosition];
  const numberTwo = input[numberTwoPosition];
  let result = 0;
  switch(opCode) {
    case 1:
      result = numberOne + numberTwo;
      input[resultPosition] = result;
      break;
    case 2:
      result = numberOne * numberTwo;
      input[resultPosition] = result;
      break;
  }
}


const nouns = [];
const verbs = [];
for(let i =0; i < 100; i++) {
  nouns.push(i);
  verbs.push(i);
}
nouns.forEach((noun) => {
  verbs.forEach((verb) => {
    input = [...INPUT];
    input[1] = noun;
    input[2] = verb;
    const slice = input.slice(0, 4);
    parseInput(currentIndex);
    if(input[0] === 19690720) {
      console.log(100 * noun + verb);
    }
  });
})
