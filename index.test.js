// findMissing([1,2,3,4,5,6,8,9,10]) => 7
// findMissing([2,3,4,5,6,7,8,9,10]) => 1
// findMissing([1,3,4,5,6,7,8,9,10]) => 2

const findMissing = require("./index");

describe("finding a number", function () {
  test("finds missing number 7", function () {
    const testArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const result = findMissing(testArray);

    expect(result).toBe(7);
  });

  test("finds missing number 1", function () {
    const testArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = findMissing(testArray);

    expect(result).toBe(1);
  });

  test("finds missing number 1", function () {
    const testArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = findMissing(testArray);

    expect(result).toBe(2);
  });
});
