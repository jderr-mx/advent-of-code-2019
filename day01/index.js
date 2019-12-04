const readline = require('readline');
const fs = require('fs');

let rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
});

let total  = 0;

rl.on('line', (line) => {
  let value = calcFuel(line);
  total += value;
  total += computeFuel(value);
});

rl.on('close', () => {
  console.log(total);
});

const computeFuel = (value) => {
  let fuel = calcFuel(value);
  if(fuel <= 0) {
    return 0;
  }
  return fuel + computeFuel(fuel);
}

const calcFuel = (value) => {
  value = Number.parseInt(value);
  let result = Math.floor(value / 3) - 2;
  return result > 0 ? result : 0;
}

