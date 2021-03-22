/**
 * @since 0.0.2
 */
import { isString } from "./string";

/**
 * check if it's contains upper case
 *
 * @since 0.0.2
 * @category Is
 */
export const isContainUpperCase = (val: any) => {
  if (!val || !isString(val)) return false;

  const _val = "" + val;

  return /[A-Z]{1,}/.test(_val);
};
