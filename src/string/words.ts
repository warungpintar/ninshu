/**
 * @since 1.0.0-alpha
 */
import { unicodeWords } from "./unicodeWords";
import { pipe } from "fp-ts/function";
import * as E from "expressive-ts/lib/Expression";

const hasUnicodeExpression = pipe(
  E.compile,
  E.range("a", "z"),
  E.range("A", "Z"),
  E.orMap,
  E.range("A", "Z"),
  E.exactly(2),
  E.range("a", "z"),
  E.orMap,
  E.range("0", "9"),
  E.anyOf("a-zA-Z"),
  E.orMap,
  E.anyOf("a-zA-Z"),
  E.range("0", "9"),
  E.orMap,
  E.anyOf("^a-zA-Z0-9 ")
);

const hasUnicodeWordRe = pipe(hasUnicodeExpression, E.toRegex);

const hasUnicodeWord = RegExp.prototype.test.bind(hasUnicodeWordRe);

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(string: string) {
  return string.match(reAsciiWord) as string[];
}

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
