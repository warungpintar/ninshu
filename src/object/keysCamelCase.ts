/**
 * @since 1.0.0-alpha
 */
import { flow } from "fp-ts/function";
import { keysTransform } from "./keysTransform";
import { camelCase } from "../string/camelCase";

/**
 * Recursively transform all keys of object/array to camelCase
 *
 * @example
 * import { keysCamelCase } from '@warungpintar/ninshu'
 *
 * keysCamelCase({FULL_NAME: 'rin'}) // output: {fullName: 'rin'}
 *
 * @category object
 * @since 1.0.0-alpha
 */
export const keysCamelCase = flow(keysTransform(camelCase));
