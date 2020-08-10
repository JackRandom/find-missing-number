// findMissing([1,2,3,4,5,6,8,9,10]) => 7

function findMissing(numberArray) {
  for (let i = 0; i < numberArray.length; i += 1) {
    const currentElement = numberArray[i]; // 6
    const nextElement = numberArray[i + 1]; // 8
    const correctElement = currentElement + 1; // 7

    if (nextElement !== correctElement) {
      return correctElement; // aka the one that is missing
    }
  }
}

module.exports = findMissing;
