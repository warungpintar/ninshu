/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { Lazy, flow } from "fp-ts/function";
import { lazy, isNumber, isNotNil, isString } from "../internal";
import { INumberFormat } from "../Number";
import { id, ILocale } from "../locale";

interface ICurrencyFormat extends INumberFormat {
  style: Lazy<"currency">;
}

const currencyFormatter = (locale: ILocale, precision = 0) => {
  const { currency, delimiters } = locale;
  const { symbol } = currency;
  const { thousands, decimal } = delimiters;

  const toStringFormat = flow(
    (value: number) =>
      `${symbol} ` +
      value
        .toFixed(precision)
        .replace(/\./g, decimal)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${thousands}`)
  );

  return flow(
    isNotNil,
    E.chain(isNumber),
    E.chain((value) => E.right(toStringFormat(value))),
    E.mapLeft(() => new TypeError("invalid format"))
  );
};

const currencyParser = (locale: ILocale, precision = 0) => (input: unknown) => {
  const { currency, delimiters } = locale;
  const { symbol } = currency;
  const { thousands, decimal } = delimiters;

  if (E.isRight(isNumber(input)))
    return E.right(Number((input as number).toFixed(precision)));

  const fromStringFormat = flow(
    (value: string) =>
      +Number(
        value
          .replace(`${symbol}`, "")
          .trim()
          .replace(new RegExp(`\\${thousands}`, "g"), "")
          .replace(new RegExp(`\\${decimal}`, "g"), ".")
      ).toFixed(precision)
  );

  return flow(
    isNotNil,
    E.chain(isString),
    E.map(fromStringFormat),
    E.mapLeft(() => new TypeError("invalid format"))
  )(input);
};

/**
 * currency formatter
 * @example
 * import {currency} from '@warungpintar/ninshu';
 * import {fold} from 'fp-ts/Either';
 * import {flow} from 'fp-ts/function';
 *
 * const formatter = currency();
 * const moneyPrint = flow(formatter.format, fold((e) =>  e, console.log))
 *
 * moneyPrint(5000)
 * //> Rp 5000
 *
 * moneyPrint("hello world")
 * //> [TypeError: invalid value]
 *
 * @since 0.0.1
 * @category Currency
 */
export const currency = (precision = 0): ICurrencyFormat => {
  return {
    style: lazy("currency"),
    format: currencyFormatter(id, precision),
    parse: currencyParser(id, precision),
  };
};
