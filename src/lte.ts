/**
 * @since 0.0.6
 */
import * as E from "fp-ts/Either";
import { validate } from "./Validators";

type Signature<T> = <A>(
  b: A
) => (a: A) => T extends boolean ? boolean : E.Either<A, A>;

/**
 * lower than or equal
 * @since 0.0.6
 * @category Is
 */
export const isLte: Signature<boolean> = (b) => (a) => a <= b;

/**
 * lower than or equal validation
 * @since 0.0.6
 * @category Validators
 */
export const validateLte = <A>(a: A) => validate<A>(isLte(a));

/**
 * either lower than or equal
 * @since 0.0.6
 * @category Either
 */
export const lte: Signature<unknown> = (b) => (a) =>
  isLte(b)(a) ? E.right(a) : E.left(a);
