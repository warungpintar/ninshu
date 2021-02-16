@ocaml.doc("
  * Recursively convert all keys of object/array into snakeCase
  *
  * ## Example
  * ```ts
  * import { keysToSnakeCase } from '@warungpintar/ninshuu'
  *
  * keysToSnakeCase({fullName: 'rin'}) // output: {full_name: 'rin'}
  * ```
 ")
@genType
let keysToSnakeCase = (input: {..}) => input->KeysTransform.keysTransform(ToSnakeCase.toSnakeCase)
