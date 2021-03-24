/**
 * @since 0.0.2
 */

type Fn = (param: any) => boolean;

/**
 * and operator
 *
 * @since 0.0.2
 * @category Operators
 */
export const and = (a: Fn) => (b: Fn) => <A>(val: A): boolean =>
  a(val) && b(val);
