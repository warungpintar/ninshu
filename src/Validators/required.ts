/**
 * @since 0.0.2
 */
import { isRequired } from "../Is/required";
import { validate } from "./validate";

/**
 * validate nil
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateRequired = validate((val) => isRequired(val));
