/**
 * @since 0.0.6
 */
import * as E from "fp-ts/Either";
import { validate } from "./Validators";

type Signature<T> = <A>(
  b: A
) => (a: A) => T extends boolean ? boolean : E.Either<A, A>;

/**
 * greater than
 * @since 0.0.6
 * @category Is
 */
export const isGt: Signature<boolean> = (b) => (a) => a > b;

/**
 * greater than validation
 * @since 0.0.6
 * @category Validators
 */
export const validateGt = <A>(a: A) => validate<A>(isGt(a));

/**
 * either greater than
 * @since 0.0.6
 * @category Either
 */
export const gt: Signature<unknown> = (b) => (a) =>
  isGt(b)(a) ? E.right(a) : E.left(a);
