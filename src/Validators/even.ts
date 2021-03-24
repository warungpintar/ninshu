/**
 * @since 0.0.2
 */
import { and } from "../Operators";
import { isEven, isNumber } from "../Is";
import { validate } from "./validate";

/**
 * validate even value
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateEven = validate(and(isNumber)(isEven));
