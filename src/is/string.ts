/**
 * @since 0.0.1
 */
import { right, left } from "fp-ts/Either";

/**
 * check if it's string
 *
 * @since 0.0.1
 * @category Is
 */
export const isString = (a: any) =>
  typeof a === "string" ? right(a) : left(a);
