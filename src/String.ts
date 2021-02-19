/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { reduceWithIndex } from "fp-ts/Array";
import {
  upperFirst,
  removeRightSingleQuotationMark,
} from "./internal/stringUtils";
import {
  hasUnicodeWord,
  unicodeWords,
  asciiWords,
} from "./internal/unicodeWords";

/**
 * Splits `string` into an array of its words.
 *
 * @example
 * import { words } from '@warungpintar/ninshu'
 *
 * words('camelCase') // output: ['camel', 'Case']
 *
 * @category string
 * @since 1.0.0-alpha
 */
export const words = (input: string, pattern?: RegExp | string) => {
  if (pattern) return (input.match(pattern) as string[]) ?? [];

  if (hasUnicodeWord(input)) return unicodeWords(input) ?? [];

  return asciiWords(input) ?? [];
};

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

  const reducer = (idx: number, prev: string, next: string) =>
    prev +
    (idx === 0 ? next.toLowerCase() : upperFirst("" + next.toLowerCase()));

  return flow(
    removeRightSingleQuotationMark,
    words,
    reduceWithIndex("", reducer)
  )(input);
};

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

  const reducer = (idx: number, prev: string, next: string) =>
    prev + (idx === 0 ? next.toLowerCase() : "_" + next.toLowerCase());

  return flow(
    removeRightSingleQuotationMark,
    words,
    reduceWithIndex("", reducer)
  )(input);
};
