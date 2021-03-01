import { isAlpha } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isAlpha("dian sastro")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isAlpha("dian sastro he2")).toBeFalsy();
  });
});
