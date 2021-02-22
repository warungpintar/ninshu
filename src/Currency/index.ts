/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { Lazy, flow } from "fp-ts/function";
import { lazy, isNumber, isNotNil } from "../internal";
import { INumberFormat } from "../Number";

interface ICurrencyFormat extends INumberFormat {
  style: Lazy<"currency">;
}

const currencyFormatter = () =>
  flow(
    isNotNil,
    E.chain(isNumber),
    E.chain((a) =>
      E.right("Rp " + a.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    ),
    E.mapLeft(() => new TypeError("invalid format"))
  );

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
