const { test, readInput } = require("../utils");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput());

const goA = (input) => {
  class passwordObject {
    constructor(minNum, maxNum, letter, password) {
      this.minNum = minNum;
      this.maxNum = maxNum;
      this.letter = letter;
      this.password = password;
    }
  }
  const validPasswords = [];

  const inputArray = input.split("\r\n");

  for (i = 0; i < inputArray.length; i++) {
    const inputArrayI = inputArray[i]
      .split("-")
      .join(",")
      .split(" ")
      .join(",")
      .split(":")
      .join(",")
      .split(",")
      .filter((x) => x != "");

    const passwordObjI = new passwordObject(
      inputArrayI[0],
      inputArrayI[1],
      inputArrayI[2],
      inputArrayI[3]
    );
    // console.log(passwordObjI);

    const numberOfLetter =
      passwordObjI.password.split(passwordObjI.letter).length - 1;
    // console.log(numberOfLetter);

    if (
      numberOfLetter >= passwordObjI.minNum &&
      numberOfLetter <= passwordObjI.maxNum
    ) {
      validPasswords.push(1);
    }
  }

  return validPasswords.length;
};

const goB = (input) => {
  class passwordObject {
    constructor(position1, position2, letter, password) {
      this.position1 = position1;
      this.position2 = position2;
      this.letter = letter;
      this.password = password;
    }
  }
  const validPasswords = [];

  const inputArray = input.split("\r\n");

  for (i = 0; i < inputArray.length; i++) {
    const inputArrayI = inputArray[i]
      .split("-")
      .join(",")
      .split(" ")
      .join(",")
      .split(":")
      .join(",")
      .split(",")
      .filter((x) => x != "");

    const passwordObjI = new passwordObject(
      inputArrayI[0],
      inputArrayI[1],
      inputArrayI[2],
      inputArrayI[3]
    );

    // console.log(passwordObjI);

    if (
      (passwordObjI.password[passwordObjI.position1 - 1] ==
        passwordObjI.letter ||
        passwordObjI.password[passwordObjI.position2 - 1] ==
          passwordObjI.letter) &&
      passwordObjI.password[passwordObjI.position1 - 1] !=
        passwordObjI.password[passwordObjI.position2 - 1]
    ) {
      validPasswords.push(1);
    }
  }

  return validPasswords.length;
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
