/**
 * @since 0.0.2
 */
import { isFqdn } from "../Is/fqdn";
import { validate } from "./validate";

/**
 * validate Fully qualified domain name
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateFqdn = <E>(e: E) => <A>(val: A) =>
  validate(isFqdn)(e)(val);
