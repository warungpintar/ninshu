import { fold } from "fp-ts/Either";
import { currency } from "../../src/Currency";

const typeError = new TypeError("invalid format");

const cases = [
  [0, "Rp 0"],
  [undefined, typeError],
  ["haha", typeError],
  [5000, "Rp 5.000"],
  [100000, "Rp 100.000"],
];

describe("currency format", () => {
  const idrCurrency = currency();
  test.each(cases)(
    "format %s",
    // @ts-ignore
    (a, b) => {
      const value = fold(
        (e) => e,
        (val) => val
      )(idrCurrency.format(a));

      expect(value).toStrictEqual(b);
    }
  );
});
