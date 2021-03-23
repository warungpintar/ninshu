/**
 * @since 0.0.2
 */

/**
 * See if an object (val) is an instance of the supplied constructor. This function will check up the inheritance chain, if any.
 *
 * @since 0.0.2
 * @category Is
 */
export const is = (c: any) => (val: any) => {
  return (val != null && val.constructor === c) || val instanceof c;
};
