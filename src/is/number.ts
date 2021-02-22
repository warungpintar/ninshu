/**
 * @since 0.0.1
 */
import { right, left } from "fp-ts/Either";

/**
 * check if it's number
 *
 * @since 0.0.1
 * @category Is
 */
export const isNumber = (a: any) =>
  isNaN(Number(a)) ? left(a) : right(Number(a));
