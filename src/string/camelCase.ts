import { flow } from "fp-ts/function";
import { reduce } from "fp-ts/Array";
import { words } from "./words";
import { upperFirst, lowerFirst, removeRightSingleQuotationMark } from "./util";

/**
 * convert `string` to
 * [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 *
 * ## Example
 * ```ts
 * import { camelCase } from '@warungpintar/ninshuu'
 *
 * camelCase('camel_case') // output: camelCase
 * ```
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
