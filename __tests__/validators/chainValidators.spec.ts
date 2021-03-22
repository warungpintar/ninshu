import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import { validateString, validateRequired, validateEmail } from "../../src";

const validator = flow(
  validateRequired("the value is required"),
  E.chain(validateString("invalid string")),
  E.chain(validateEmail("invalid email")),
  E.fold(
    (e) => e,
    (val) => val
  )
);

describe("chaning validators", () => {
  it("positive cases", () => {
    expect(validator("foo@bar.com")).toBe("foo@bar.com");
  });

  it("negative cases", () => {
    expect(validator(null)).toBe("the value is required");
    expect(validator(20)).toBe("invalid string");
    expect(validator("foo!@bar")).toBe("invalid email");
  });
});
