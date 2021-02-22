/**
 * @since 0.0.1
 */
import { right, left } from "fp-ts/Either";

/**
 * check if it's array
 *
 * @since 0.0.1
 * @category Is
 */
export const isArray = (a: any) => (Array.isArray(a) ? right(a) : left(a));
