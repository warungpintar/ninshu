/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isString } from "../Is";

/**
 * validate string type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateString = (errorMessage: string) => <A>(value: A) =>
  isString(value) ? E.right("" + value) : E.left(errorMessage);
