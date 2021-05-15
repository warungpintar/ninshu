/**
 * @since 0.0.7
 */
import * as E from "fp-ts/Either";
import isEqual from "react-fast-compare";

/**
 * deep equality check
 *
 * @since 0.0.7
 * @category Is
 */
export const isDeepEq = <T>(a: T) => (b: T) => isEqual(a, b);

/**
 * either deep equals
 *
 * @since 0.0.7
 * @category Either
 */
export const deepEq = <T>(a: T) => (b: T) =>
  isDeepEq(a)(b) ? E.right(b) : E.left(b);
