/**
 * @since 0.0.2
 */
import { is } from "./is";

/**
 * check length
 *
 * @since 0.0.2
 * @category Is
 */
export const isLength = (len: number) => (a: any) => {
  if (!a) return false;

  return is(Number)(a?.length) ? a.length === Number(len) : false;
};
