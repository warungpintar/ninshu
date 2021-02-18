/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { reduce } from "fp-ts/Array";
import { words } from "./words";
import { removeFirstChar, removeRightSingleQuotationMark } from "./util";

/**
 * convert `string` to
 * [snake_case](https://en.wikipedia.org/wiki/Snake_case)
 *
 * @example
 * import { snakeCase } from '@warungpintar/ninshu'
 *
 * snakeCase('snakeCase') // output: snake_case
 * @category string
 * @since 1.0.0-alpha
 */
export const snakeCase = (input: string) => {
  if (typeof input !== "string") return "";
  if (input.length === 0) return "";

  const reducer = (prev: string, next: string) =>
    prev + "_" + next.toLowerCase();

  return flow(
    removeRightSingleQuotationMark,
    words,
    reduce("", reducer),
    removeFirstChar
  )(input);
};
