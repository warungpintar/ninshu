import { fold } from "fp-ts/Either";
import { currency } from "../../src/Currency";

const typeError = new TypeError("invalid format");

const cases = [
  ["Rp 0", 0],
  [NaN, typeError],
  ["Rp 50.000", 50000],
  [50000.67, 50001],
  ["Rp 60.000,55", 60001],
];

const precisionCases = [
  ["Rp 50.000,256", 2, 50000.26],
  ["Rp 50.000,256", 4, 50000.256],
  ["Rp50.000,256", 4, 50000.256],
  ["Rp 100.000,25689", 4, 100000.2569],
];

describe("currency parse", () => {
  const idrCurrency = currency();
  test.each(cases)(
    "parse %s",
    // @ts-ignore
    (a, b) => {
      const value = fold(
        (e) => e,
        (val) => val
      )(idrCurrency.parse(a));

      expect(value).toStrictEqual(b);
    }
  );
});

describe("currency parse with precision", () => {
  test.each(precisionCases)(
    "parse %s",
    // @ts-ignore
    (a, b, c) => {
      const currencyFormatter = currency(Number(b));
      const value = fold(
        (e) => e,
        (val) => val
      )(currencyFormatter.parse(a));

      expect(value).toStrictEqual(c);
    }
  );
});
