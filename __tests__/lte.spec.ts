import { lte, isLte, validateLte } from "../src";
import * as E from "fp-ts/Either";

const err = new Error("invalid condition");

const testCases = [
  [5, 10, true],
  [10, 6, false],
  [10, 10, true],
];

describe("lower than or equal", () => {
  test.each(testCases)("is %i lower than or equal %i", (a, b, expected) => {
    const _is = isLte(b);
    const _either = lte(b);
    const _validate = validateLte(b)(err);

    expect(_is(a)).toBe(expected);
    expect(_either(a)).toStrictEqual(expected ? E.right(a) : E.left(a));
    expect(_validate(a)).toStrictEqual(expected ? E.right(a) : E.left(err));
  });
});
