import { isFqdn } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isFqdn("foo.com")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isFqdn("f!oo.com")).toBeFalsy();
  });
});
