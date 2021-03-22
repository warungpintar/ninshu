/**
 * @since 0.0.2
 */

import * as E from "fp-ts/Either";
import { isEmail } from "../Is";

/**
 * validate email type
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateEmail = (errorMessage: string) => <A>(value: A) =>
  isEmail(value) ? E.right(value) : E.left(errorMessage);
