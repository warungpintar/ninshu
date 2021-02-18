/**
 * @since 1.0.0-alpha
 */
import { unicodeWords } from "./unicodeWords";

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
);

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
