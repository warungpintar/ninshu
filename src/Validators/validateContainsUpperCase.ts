/**
 * @since 0.0.2
 */
import { isContainUpperCase } from "../Is/containsUpperCase";
import { validate } from "./validate";

/**
 * validate partial upper case
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateContainsUpperCase = validate<string>(isContainUpperCase);
