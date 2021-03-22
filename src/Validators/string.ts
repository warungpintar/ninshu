/**
 * @since 0.0.1
 */
import { isString } from "../Is";
import { validate } from "./validate";

/**
 * validate string type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateString = validate<string>(isString);
