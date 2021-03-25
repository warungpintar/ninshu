/**
 * @since 0.0.2
 */
import * as E from "fp-ts/Either";

/**
 * validate with custom condition
 *
 * @since 0.0.2
 * @category Validators
 */
export const validate = <T>(f: (a: any) => boolean) => <E>(b: E) => <A>(
  a: A
): E.Either<E, unknown extends T ? (unknown extends A ? any : A) : T> => {
  return f(a) ? E.right(a as any) : E.left(b);
};
