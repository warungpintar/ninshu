/**
 * @since 0.0.2
 */
import { isMatchRe } from "./matchRe";

/**
 * check if it's contains upper case
 *
 * @since 0.0.2
 * @category Is
 */
export const isContainUpperCase = isMatchRe(/[A-Z]{1,}/);
