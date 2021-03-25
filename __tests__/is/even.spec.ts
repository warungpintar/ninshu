import { isEven } from "../../src";

const nevativeCases = [[1], [3], [5], [7], [9], [11], [13], [1001], [2001]];
const postiveCases = [[2], [4], [6], [8], [10], [12], [14], [1000], [2000]];

describe("odd test", () => {
  test.each(postiveCases)("even %s", (val) => {
    expect(isEven(val)).toBeTruthy();
  });

  test.each(nevativeCases)("even negative %s", (val) => {
    expect(isEven(val)).toBeFalsy();
  });
});
