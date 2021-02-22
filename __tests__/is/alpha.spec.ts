import * as E from "fp-ts/Either";
import { isAlpha } from "../../src/is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(E.isRight(isAlpha("dian sastro"))).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(E.isLeft(isAlpha("dian sastro he2"))).toBeTruthy();
  });
});
