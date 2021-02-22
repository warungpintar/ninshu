/**
 * @since 0.0.1
 */

import * as E from "fp-ts/Either";
import { isArray } from "../Is";

/**
 * validate array
 *
 * @since 0.0.1
 * @category Validators
 */
export const array = (value: unknown) =>
  isArray(value) ? E.right(value as unknown[]) : E.left("invalid array");
