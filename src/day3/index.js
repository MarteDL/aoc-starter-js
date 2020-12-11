const { test, readInput } = require("../utils");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput());

const goA = (input) => {
  const inputArray = input.split("\r\n");
  // console.log(inputArray);

  const countTreesArray = [];
  let x = 0;

  for (var y = 1; y < inputArray.length; y++) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x += 3;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArray.push(1);
    }
  }
  console.log(countTreesArray.length);
};

const goB = (input) => {
  return;
};

/* Tests */

// test(result, expected)

/* Results */

console.time("Time");
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultA);
console.log("Solution to part 2:", resultB);
