/**
 * @since 0.0.1
 */
import { isNumber } from "../Is/number";
import { validate } from "./validate";

/**
 * validate number type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateNumber = validate<number>(isNumber);
