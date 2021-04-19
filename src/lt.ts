/**
 * @since 0.0.6
 */
import * as E from "fp-ts/Either";
import { validate } from "./Validators";

type Signature<T> = <A>(
  b: A
) => (a: A) => T extends boolean ? boolean : E.Either<A, A>;

/**
 * lower than
 * @since 0.0.6
 * @category Is
 */
export const isLt: Signature<boolean> = (b) => (a) => a < b;

/**
 * lower than validation
 * @since 0.0.6
 * @category Validators
 */
export const validateLt = <A>(a: A) => validate<A>(isLt(a));

/**
 * either lower than
 * @since 0.0.6
 * @category Either
 */
export const lt: Signature<unknown> = (b) => (a) =>
  isLt(b)(a) ? E.right(a) : E.left(a);
