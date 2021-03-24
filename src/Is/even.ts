/**
 * @since 0.0.2
 */
import { isOdd } from "./odd";

/**
 * check if the give value is even
 *
 * @since 0.0.2
 * @category Is
 */
export const isEven = (val: any) => !isOdd(val);
