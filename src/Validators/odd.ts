/**
 * @since 0.0.2
 */
import { isOdd } from "../Is/odd";
import { isNumber } from "../Is/number";
import { and } from "../Operators";
import { validate } from "./validate";

/**
 * validate odd value
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateOdd = validate(and(isNumber)(isOdd));
