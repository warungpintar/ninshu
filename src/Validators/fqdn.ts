/**
 * @since 0.0.2
 */

import * as E from "fp-ts/Either";
import { isFqdn } from "../Is";

/**
 * validate Fully qualified domain name
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateFqdn = (errorMessage: string) => <A>(value: A) =>
  isFqdn(value) ? E.right(value) : E.left(errorMessage);
