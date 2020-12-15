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
  return countTreesArray.length;
};

const goB = (input) => {
  const inputArray = input.split("\r\n");
  // console.log(inputArray);

  const countTreesArraySlope1 = [];
  const countTreesArraySlope2 = [];
  const countTreesArraySlope3 = [];
  const countTreesArraySlope4 = [];
  const countTreesArraySlope5 = [];

  let x = 0;

  for (let y = 1; y < inputArray.length; y++) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x++;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArraySlope1.push(1);
    }
  }

  x = 0;

  for (let y = 1; y < inputArray.length; y++) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x += 3;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArraySlope2.push(1);
    }
  }

  x = 0;

  for (let y = 1; y < inputArray.length; y++) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x += 5;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArraySlope3.push(1);
    }
  }

  x = 0;

  for (let y = 1; y < inputArray.length; y++) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x += 7;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArraySlope4.push(1);
    }
  }

  x = 0;

  for (let y = 2; y < inputArray.length; y += 2) {
    const treeLineString = inputArray[y];
    // console.log(treeLineString);

    const treeLineArray = treeLineString.split("");
    // console.log(treeLineArray);

    x++;

    // console.log(treeLineArray[x]);

    if (treeLineArray[x % treeLineArray.length] == "#") {
      countTreesArraySlope5.push(1);
    }
  }
  
  /* console.log(countTreesArraySlope1.length);
  console.log(countTreesArraySlope2.length);
  console.log(countTreesArraySlope3.length);
  console.log(countTreesArraySlope4.length);
  console.log(countTreesArraySlope5.length); */

  const productOfTrees = countTreesArraySlope1.length*countTreesArraySlope2.length*countTreesArraySlope3.length*countTreesArraySlope4.length*countTreesArraySlope5.length;

  return productOfTrees
;
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
