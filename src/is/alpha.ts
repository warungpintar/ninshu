/**
 * @since 0.0.1
 */
import { flow } from "fp-ts/function";
import { isMatchRe } from "./matchRe";

const alphaRegex = /^[A-Z ]+$/i;

/**
 * check if it's alpha
 *
 * @since 0.0.1
 * @category Is
 */
export const isAlpha = flow(isMatchRe(alphaRegex));
