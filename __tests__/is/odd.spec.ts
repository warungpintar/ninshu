import { isOdd } from "../../src";

const postiveCases = [[1], [3], [5], [7], [9], [11], [13], [1001], [2001]];
const nevativeCases = [[2], [4], [6], [8], [10], [12], [14], [1000], [2000]];

describe("odd test", () => {
  test.each(postiveCases)("odd %s", (val) => {
    expect(isOdd(val)).toBeTruthy();
  });

  test.each(nevativeCases)("odd negative %s", (val) => {
    expect(isOdd(val)).toBeFalsy();
  });
});
