/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isMatchRe } from "../Is";

/**
 * validate string with regex
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateMatchRe = (re: RegExp, errorMessage: string) => <A>(
  value: A
) => (isMatchRe(re)(value) ? E.right(value) : E.left(errorMessage));
