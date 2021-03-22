/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isNumber } from "../Is";

/**
 * validate number type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateNumber = (errorMessage: string) => <A>(value: A) =>
  isNumber(value) ? E.right(Number(value)) : E.left(errorMessage);
