import { isEq } from "../../src";

describe("isEq", () => {
  const isString = isEq("string");

  it("should match expectation", () => {
    expect(isString(typeof "test")).toBeTruthy();
    expect(isString(typeof 20)).toBeFalsy();
  });
});
