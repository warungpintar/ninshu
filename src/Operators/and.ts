/**
 * @since 0.0.2
 */

type Fn = (param: any) => boolean;

/**
 * and operator
 *
 * @since 0.0.2
 * @category Operators
 * @example
 *
 * import {and, isEq, isNumber} from '@warungpintar/ninshu';
 *
 * const isNine = and(isNumber)(isEq(9));
 *
 * console.log(isNine(9));
 * //> true
 */
export const and = (a: Fn) => (b: Fn) => <A>(val: A): boolean =>
  a(val) && b(val);
