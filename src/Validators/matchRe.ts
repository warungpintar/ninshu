/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isMatchRe } from "../Is";

/**
 * validate regex
 *
 * @since 0.0.1
 * @category Validators
 */
export const matchRe = (re: RegExp) => (value: unknown) =>
  isMatchRe(re)(value)
    ? E.right(value)
    : E.left("doesn't match the provided regex");
