/**
 * @since 0.0.1
 */
import { right, left } from "fp-ts/Either";

/**
 * check if it's not nil
 *
 * @since 0.0.1
 * @category Is
 */
export const isNotNil = (a: any) =>
  a !== null || a !== undefined ? right(a) : left(a);
