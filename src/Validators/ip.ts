/**
 * @since 0.0.2
 */
import { isIp, isIPv4, isIPv6 } from "../Is/ip";
import { validate } from "./validate";

/**
 * validate ipv4 / ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIp = validate<string>(isIp);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv4 = validate<string>(isIPv4);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv6 = validate<string>(isIPv6);
