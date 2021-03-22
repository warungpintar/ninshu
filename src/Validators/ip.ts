/**
 * @since 0.0.2
 */

import * as E from "fp-ts/Either";
import { isIp, isIPv4, isIPv6 } from "../Is";

/**
 * validate ipv4 / ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIp = (errorMessage: string) => <A>(value: A) =>
  isIp(value) ? E.right(value) : E.left(errorMessage);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv4 = (errorMessage: string) => <A>(value: A) =>
  isIPv4(value) ? E.right(value) : E.left(errorMessage);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv6 = (errorMessage: string) => <A>(value: A) =>
  isIPv6(value) ? E.right(value) : E.left(errorMessage);
