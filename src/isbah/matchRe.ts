/**
 * @since 0.0.1
 */

/**
 * check if it's match regex
 *
 * @since 0.0.1
 * @category Is
 */
export const isMatchRe = (re: RegExp) => (a: any) => !!a && re.test(a);
