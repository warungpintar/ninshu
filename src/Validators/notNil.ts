/**
 * @since 0.0.1
 */
import { isNotNil } from "../Is";
import { validate } from "./validate";

/**
 * validate nil
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateNotNil = validate(isNotNil);
