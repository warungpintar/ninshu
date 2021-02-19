/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { Lazy } from "fp-ts/function";
import { lazy } from "../internal/function";
import { INumberFormat } from "../Number";

interface ICurrencyFormat extends INumberFormat {
  style: Lazy<"currency">;
}

const currencyFormatter = <A>() => (value: A) => {
  const errorMessage = new TypeError("invalid format");
  if (value === null || value === undefined) return E.left(errorMessage);
  const _value = Number(value);
  if (isNaN(_value)) return E.left(errorMessage);

  return E.right(
    "Rp " + _value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  );
};

/**
 * currency formatter
 *
 * @example
 * import {currency} from '@warungpintar/ninshu';
 * import {fold} from 'fp-ts/Either';
 * import {flow} from 'fp-ts/function';
 *
 * const formatter = currency();
 * const moneyPrint = flow(formatter.format, fold(throw, console.log))
 *
 * moneyPrint(5000)
 * //> Rp 5000
 *
 * moneyPrint("hello world")
 * //> Uncaught TypeError: invalid value
 *
 * @since 0.0.1
 * @category Currency
 */
export const currency = (): ICurrencyFormat => {
  return {
    style: lazy("currency"),
    format: currencyFormatter(),
  };
};
