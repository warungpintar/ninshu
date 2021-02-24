/**
 * @since 0.0.1
 */
import * as E from "fp-ts/Either";
import { isNotNil } from "../Is";

/**
 * validate nil
 *
 * @since 0.0.1
 * @category Validators
 */
export const validateNotNil = (errorMessage: string) => (value: unknown) =>
  isNotNil(value) ? E.right(value) : E.left(errorMessage);
