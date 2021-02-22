/**
 * @since 0.0.1
 */
import { right, left } from "fp-ts/Either";

/**
 * check if it's match regex
 *
 * @since 0.0.1
 * @category Is
 */
export const isMatchRe = (re: RegExp) => (a: any) =>
  !!a && re.test(a) ? right(a) : left(a);
