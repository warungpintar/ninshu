import { and, isEq, isNumber } from "../../src";

describe("and", () => {
  const isTen = and(isNumber)(isEq(10));

  it("should match expectation", () => {
    expect(isTen(10)).toBeTruthy();
    expect(isTen(20)).toBeFalsy();
  });
});
