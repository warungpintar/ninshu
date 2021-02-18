/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { reduce } from "fp-ts/Array";
import { words } from "./words";
import { upperFirst, lowerFirst, removeRightSingleQuotationMark } from "./util";

/**
 * convert `string` to
 * [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 *
 * @example
 * import { camelCase } from '@warungpintar/ninshu'
 *
 * camelCase('camel_case') // output: camelCase
 *
 * @category string
 * @since 1.0.0-alpha
 */
export const camelCase = (input: string) => {
  if (typeof input !== "string") return "";
  if (input.length === 0) return "";

  return flow(
    removeRightSingleQuotationMark,
    words,
    reduce("", (prev, next) => prev + upperFirst("" + next.toLowerCase())),
    lowerFirst
  )(input);
};
