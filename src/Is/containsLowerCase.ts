/**
 * @since 0.0.2
 */
import { isString } from "./string";

/**
 * check if it's contains lower case
 *
 * @since 0.0.2
 * @category Is
 */
export const isContainLowerCase = (val: any) => {
  if (!val || !isString(val)) return false;

  const _val = "" + val;

  return /[a-z]{1,}/.test(_val);
};
