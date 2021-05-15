import { isDeepEq } from "../src";

const cases = [
  [0, 0, true],
  [NaN, NaN, true],
  [[0, 1], [1, 2], false],
];

describe("deep equality check", () => {
  cases.forEach(([a, b, expectation], idx) => {
    it(`test ${idx}`, () => {
      expect(isDeepEq(a)(b)).toEqual(expectation as any);
    });
  });
});
