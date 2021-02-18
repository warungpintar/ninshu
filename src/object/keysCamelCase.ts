import { flow } from "fp-ts/function";
import { keysTransform } from "./keysTransform";
import { camelCase } from "../string/camelCase";

/**
 * Recursively transform all keys of object/array to camelCase
 *
 * ## Example
 * ```ts
 * import { keysCamelCase } from '@warungpintar/ninshu'
 *
 * keysCamelCase({FULL_NAME: 'rin'}) // output: {fullName: 'rin'}
 * ```
 */
export const keysCamelCase = flow(keysTransform(camelCase));
