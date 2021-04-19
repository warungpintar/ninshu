/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { snakeCase } from "../String";
import { keysTransform } from "./keysTransform";

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
