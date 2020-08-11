// findMissing([1,2,3,4,5,6,8,9,10]) => 7
// findMissing([2,3,4,5,6,7,8,9,10]) => 1

const findMissing = (numberArray) => {
  const firstElement = numberArray[0]; //2

  if (firstElement !== 1) {
    return 1;
  }

  for (let i = 0; i < numberArray.length; i += 1) {
    const currentElement = numberArray[i]; // 2
    const nextElement = numberArray[i + 1]; // 3
    const correctElement = currentElement + 1; // 3

    if (nextElement !== correctElement) {
      return correctElement; // aka the one that is missing
    }
  }
};

module.exports = findMissing;
