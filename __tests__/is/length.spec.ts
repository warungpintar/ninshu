import { isLength } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isLength(14)("foobar@foo.com")).toBeTruthy();
    expect(isLength(3)("foo")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isLength(4)("f!oo.com")).toBeFalsy();
    expect(isLength(5)("foo@.com")).toBeFalsy();
    expect(isLength(0)(null)).toBeFalsy();
    expect(isLength(0)("")).toBeFalsy();
  });
});
