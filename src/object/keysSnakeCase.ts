/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { keysTransform } from "./keysTransform";
import { snakeCase } from "../string/snakeCase";

/**
 * Recursively transform all keys of object/array to snake_case
 *
 * @example
 * import { keysSnakeCase } from '@warungpintar/ninshu'
 *
 * keysSnakeCase({fullName: 'rin'})
 * // => output: {full_name: 'rin'}
 *
 * @category object
 * @since 1.0.0-alpha
 */
export const keysSnakeCase = flow(keysTransform(snakeCase));
