import { flow } from "fp-ts/function";
import { keysTransform } from "./keysTransform";
import { snakeCase } from "../string/snakeCase";

/**
 * Recursively transform all keys of object/array to snake_case
 *
 * ## Example
 * ```ts
 * import { keysSnakeCase } from '@warungpintar/ninshu'
 *
 * keysSnakeCase({fullName: 'rin'}) // output: {full_name: 'rin'}
 * ```
 */
export const keysSnakeCase = flow(keysTransform(snakeCase));
