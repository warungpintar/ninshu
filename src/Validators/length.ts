/**
 * @since 0.0.2
 */
import { isLength } from "../Is/length";
import { validate } from "./validate";

/**
 * validate length
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateLength = <E>(len: number, e: E) => <A>(val: A) =>
  validate(isLength(len))(e)(val);
