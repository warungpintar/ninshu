import { gt, isGt, validateGt } from "../src";
import * as E from "fp-ts/Either";

const err = new Error("invalid condition");

const testCases = [
  [5, 10, false],
  [10, 6, true],
  [10, 10, false],
];

describe("greater than", () => {
  test.each(testCases)("is %i greater than %i", (a, b, expected) => {
    const _is = isGt(b);
    const _either = gt(b);
    const _validate = validateGt(b)(err);

    expect(_is(a)).toBe(expected);
    expect(_either(a)).toStrictEqual(expected ? E.right(a) : E.left(a));
    expect(_validate(a)).toStrictEqual(expected ? E.right(a) : E.left(err));
  });
});
