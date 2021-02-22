import * as E from "fp-ts/Either";
import { isAlphanumeric } from "../../src/is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(E.isRight(isAlphanumeric("diansastrohe2"))).toBeTruthy();
    expect(isAlphanumeric(304948)).toStrictEqual(E.right(304948));
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(E.isLeft(isAlphanumeric("dian sastro"))).toBeTruthy();
  });
});
