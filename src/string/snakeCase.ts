import { flow } from "fp-ts/function";
import { reduce } from "fp-ts/Array";
import { words } from "./words";
import { removeFirstChar, removeRightSingleQuotationMark } from "./util";

/**
 * convert `string` to
 * [snake_case](https://en.wikipedia.org/wiki/Snake_case)
 *
 * ## Example
 * ```ts
 * import { snakeCase } from '@warungpintar/ninshuu'
 *
 * snakeCase('snakeCase') // output: snake_case
 * ```
 */
export const snakeCase = (input: string) => {
  if (typeof input !== "string") return "";
  if (input.length === 0) return "";

  return flow(
    removeRightSingleQuotationMark,
    words,
    reduce("", (prev, next) => prev + "_" + next.toLowerCase()),
    removeFirstChar
  )(input);
};
