@ocaml.doc("
  * Recursively convert all keys of object/array into camelCase
  *
  * ## Example
  * ```ts
  * import { keysToCamelCase } from '@warungpintar/ninshuu'
  *
  * keysToCamelCase({full_name: 'rin'}) // output: {fullName: 'rin'}
  * ```
 ")
@genType
let keysToCamelCase = (input: {..}) => input->KeysTransform.keysTransform(ToCamelCase.toCamelCase)
