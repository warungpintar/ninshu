/**
 * @since 0.0.1
 */

import * as E from "fp-ts/Either";
import { isArray } from "../Is";

/**
 * validate array type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateArray = (errorMessage: string) => <A>(value: A | A[]) =>
  isArray(value) ? E.right(value) : E.left(errorMessage);
