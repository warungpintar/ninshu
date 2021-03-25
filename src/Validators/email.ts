/**
 * @since 0.0.2
 */
import { isEmail } from "../Is/email";
import { validate } from "./validate";

/**
 * validate email type
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateEmail = validate<string>(isEmail);
