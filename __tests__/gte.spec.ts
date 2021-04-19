import { gte, isGte, validateGte } from "../src";
import * as E from "fp-ts/Either";

const err = new Error("invalid condition");

const testCases = [
  [5, 10, false],
  [10, 6, true],
  [10, 10, true],
];

describe("greater than or equal", () => {
  test.each(testCases)("is %i greater than or equal %i", (a, b, expected) => {
    const _is = isGte(b);
    const _either = gte(b);
    const _validate = validateGte(b)(err);

    expect(_is(a)).toBe(expected);
    expect(_either(a)).toStrictEqual(expected ? E.right(a) : E.left(a));
    expect(_validate(a)).toStrictEqual(expected ? E.right(a) : E.left(err));
  });
});
