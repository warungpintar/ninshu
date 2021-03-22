/**
 * @since 0.0.1
 */
import { isMatchRe } from "../Is";
import { validate } from "./validate";

/**
 * validate string with regex
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateMatchRe = <E>(re: RegExp, e: E) =>
  validate(isMatchRe(re))(e);
