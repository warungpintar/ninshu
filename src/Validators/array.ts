/**
 * @since 0.0.1
 */
import { isArray } from "../Is/array";
import { validate } from "./validate";

/**
 * validate array type
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateArray = <E>(e: E) => <A>(val: A[]) =>
  validate(isArray)(e)(val);
