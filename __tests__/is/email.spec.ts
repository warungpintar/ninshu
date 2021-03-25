import { isEmail } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isEmail("foobar@foo.com")).toBeTruthy();
    expect(isEmail("foo.bar@gmail.com")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isEmail("f!oo.com")).toBeFalsy();
    expect(isEmail("foo@.com")).toBeFalsy();
  });
});
