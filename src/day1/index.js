const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const numbersAsString = input.split('\r\n');
  const numbers = numbersAsString.map(x => parseInt(x, 10));
  
  for (let i=0; i<numbers.length; i++) {

    for (let x = i + 1; x<numbers.length; x++) {
      
      let sum = numbers[i] + numbers[x];
         if (sum == 2020) {
         console.log(numbers[i]);
         console.log(numbers[x]);
         return numbers[i] * numbers[x];
       }  

    }
  }
}

const goB = (input) => {
  const numbersAsString = input.split('\r\n');
  const numbers = numbersAsString.map(x => parseInt(x, 10));

  for (let i=0; i<numbers.length; i++) {
    for (let x = i + 1; x<numbers.length; x++) {
      for (let y = x + 1; y<numbers.length; y++) {
        let sum = numbers[i] + numbers[x] + numbers[y];
         if (sum == 2020) {
         console.log(numbers[i]);
         console.log(numbers[x]);
         console.log(numbers[y]);
         return numbers[i] * numbers[x] * numbers[y];
        }  
      }
    }
  }
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
