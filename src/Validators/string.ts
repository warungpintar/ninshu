/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isString } from "../Is";

/**
 * validate string
 *
 * @since 0.0.1
 * @category Validators
 */
export const string = (value: unknown) =>
  isString(value) ? E.right("" + value) : E.left("invalid string");
