/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isNumber } from "../Is";

/**
 * validate number
 *
 * @since 0.0.1
 * @category Validators
 */
export const number = (value: unknown) =>
  isNumber(value) ? E.right(Number(value)) : E.left("invalid number");
