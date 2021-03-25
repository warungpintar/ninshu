/**
 * @since 0.0.2
 */

/**
 * check equality of the value
 *
 * @since 0.0.2
 * @category Is
 *
 * @example
 *
 * import { isEq } from '@warungpintar/ninshu';
 *
 * const isTen = isEq(10);
 *
 * console.log(isTen(10));
 * //> true
 *
 * console.log(isTen(20));
 * //> false
 */
export const isEq = <A>(a: A) => (b: A) => a === b;
