/**
 * @since 0.0.1
 */
import { flow } from "fp-ts/function";
import { isMatchRe } from "./matchRe";

const alphanumericRegex = /^[0-9A-Z]+$/i;

/**
 * check if it's alphanumeric
 *
 * @since 0.0.1
 * @category Is
 */
export const isAlphanumeric = flow(isMatchRe(alphanumericRegex));
