/**
 * @since 0.0.2
 */

import { isString } from "./string";

/**
 * check if it's Fully qualified domain name
 *
 * @since 0.0.2
 * @category Is
 */
export const isFqdn = <A>(val: A) => {
  if (!val || !isString(val)) {
    return false;
  }
  const _val: string = "" + val;
  const parts = _val.split(".");
  const tld = parts.pop() ?? "";

  if (
    !parts.length ||
    !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)
  ) {
    return false;
  }

  for (let part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (
      part[0] === "-" ||
      part[part.length - 1] === "-" ||
      part.indexOf("---") >= 0
    ) {
      return false;
    }
  }

  return true;
};
