/**
 * @since 0.0.2
 */

import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import { validateRequired, validateString } from "../Validators";
import { isMatchRe } from "./matchRe";

type FQDN = {
  tld: string;
  parts: string[];
  raw: string;
};

const parseTld = (val: string): E.Either<boolean, FQDN> => {
  const parts = val.split(".");
  const tld = parts[parts.length - 1];

  if (parts.length === 1) {
    return E.left(false);
  }

  if (!isMatchRe(/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i)(tld)) {
    return E.left(false);
  }

  return E.right({
    tld,
    parts,
    raw: val,
  });
};

const checkInvalidPart = (val: FQDN): E.Either<boolean, FQDN> => {
  const { parts } = val;

  const hasInvalidPart = parts.some((part) => {
    if (!isMatchRe(/^[a-z\u00a1-\uffff0-9-]+$/i)(part)) {
      return true;
    }
    if (
      part[0] === "-" ||
      part[part.length - 1] === "-" ||
      part.indexOf("---") >= 0
    ) {
      return true;
    }

    return false;
  });

  return hasInvalidPart ? E.left(false) : E.right(val);
};

/**
 * check if it's Fully qualified domain name
 *
 * @since 0.0.2
 * @category Is
 */
export const isFqdn = <A>(val: A) => {
  return flow(
    validateRequired(false),
    E.chain(validateString(false)),
    E.chain(parseTld),
    E.chain(checkInvalidPart),
    E.fold(
      (e) => e,
      () => true
    )
  )(val);
};
