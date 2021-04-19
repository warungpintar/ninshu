import { lt, isLt, validateLt } from "../src";
import * as E from "fp-ts/Either";

const err = new Error("invalid condition");

const testCases = [
  [5, 10, true],
  [10, 6, false],
  [10, 10, false],
];

describe("lower than", () => {
  test.each(testCases)("is %i lower than %i", (a, b, expected) => {
    const _is = isLt(b);
    const _either = lt(b);
    const _validate = validateLt(b)(err);

    expect(_is(a)).toBe(expected);
    expect(_either(a)).toStrictEqual(expected ? E.right(a) : E.left(a));
    expect(_validate(a)).toStrictEqual(expected ? E.right(a) : E.left(err));
  });
});
