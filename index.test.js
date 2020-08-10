// findMissing([1,2,3,4,5,6,8,9,10]) => 7
const findMissing = require("./index");

describe("finding a number", () => {
  test("finds missing number 7", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const result = findMissing(testArray);

    expect(result).toBe(7);
  });
});
