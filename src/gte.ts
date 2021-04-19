/**
 * @since 0.0.6
 */
import * as E from "fp-ts/Either";
import { validate } from "./Validators";

type Signature<T> = <A>(
  b: A
) => (a: A) => T extends boolean ? boolean : E.Either<A, A>;

/**
 * greater than or equal
 * @since 0.0.6
 * @category Is
 */
export const isGte: Signature<boolean> = (b) => (a) => a >= b;

/**
 * greater than or equal validation
 * @since 0.0.6
 * @category Validators
 */
export const validateGte = <A>(a: A) => validate<A>(isGte(a));

/**
 * either greater than or equal
 * @since 0.0.6
 * @category Either
 */
export const gte: Signature<unknown> = (b) => (a) =>
  isGte(b)(a) ? E.right(a) : E.left(a);
