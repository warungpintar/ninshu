/**
 * @since 0.0.2
 */
import { and } from "../Operators/and";
import { isEven } from "../Is/even";
import { isNumber } from "../Is/number";
import { validate } from "./validate";

/**
 * validate even value
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateEven = validate(and(isNumber)(isEven));
