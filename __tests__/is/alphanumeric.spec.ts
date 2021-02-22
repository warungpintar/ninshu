import { isAlphanumeric } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isAlphanumeric("diansastrohe2")).toBeTruthy();
    expect(isAlphanumeric(304948)).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isAlphanumeric("dian sastro")).toBeFalsy();
  });
});
