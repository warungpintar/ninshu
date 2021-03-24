/**
 * @since 0.0.2
 */
import { isContainLowerCase } from "../Is/containsLowerCase";
import { validate } from "./validate";

/**
 * validate partial lower case
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateContainsLowerCase = validate<string>(isContainLowerCase);
