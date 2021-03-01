/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { Lazy, flow } from "fp-ts/function";
import { lazy } from "../internal";
import { validateNumber, validateNotNil, validateString } from "../Validators";
import { isNumber } from "../Is";
import { INumberFormat } from "../Number";
import { id, ILocale } from "../locale";

interface ICurrencyFormat extends INumberFormat {
  style: Lazy<"currency">;
}

const currencyFormatter = () =>
  flow(
    validateNotNil("currency can't be nil!"),
    E.chain(validateNumber("value should be a number!")),
    E.chain((a) =>
      E.right("Rp " + a.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    ),
    E.mapLeft((message) => message)
  );

const currencyParser = (locale: ILocale, precision = 0) => (input: unknown) => {
  const { currency, delimiters } = locale;
  const { symbol } = currency;
  const { thousands, decimal } = delimiters;

  if (isNumber(input))
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
    validateNotNil("currency can't be nil!"),
    E.chain(validateString("value should be a string!")),
    E.map(fromStringFormat),
    E.mapLeft((message) => message)
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
 * const moneyPrint = flow(formatter.format, fold(console.log, console.log))
 *
 * moneyPrint(5000)
 * //> Rp 5000
 *
 * moneyPrint("hello world")
 * //> value should be a number
 *
 * @since 0.0.1
 * @category Currency
 */
export const currency = (precision = 0): ICurrencyFormat => {
  return {
    style: lazy("currency"),
    format: currencyFormatter(),
    parse: currencyParser(id, precision),
  };
};
