/**
 * @since 0.0.2
 */
import { isMatchRe } from "./matchRe";

/**
 * check if it's contains lower case
 *
 * @since 0.0.2
 * @category Is
 */
export const isContainLowerCase = isMatchRe(/[a-z]{1,}/);
