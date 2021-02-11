@ocaml.doc("
  * transform any case into array of string per segment.
  *
  * ## Example
  * ```ts
  * import { noCase } from '@warungpintar/ninshuu'
  *
  * noCase('camelCase') // output: ['camel', 'Case']
  * 
  * // invoked using invalid value will return array with empty string
  * noCase(20) // output: ['']
  * ```
 ")
@genType
let noCase = StringCommon.noCase

@ocaml.doc("
  * check whether the given string are camelCase
  *
  * ## Example
  * ```ts
  * import { isCamelCase } from '@warungpintar/ninshuu'
  *
  * isCamelCase('camelCase') // output: true
  * ```
 ")
@genType
let isCamelCase = StringCamelCase.isCamelCase

@ocaml.doc("
  * convert any given string into camelCase
  *
  * ## Example
  * ```ts
  * import { toCamelCase } from '@warungpintar/ninshuu'
  *
  * toCamelCase('snake_case') // output: snakeCase
  *
  * // invoked using invalid value will return empty string
  * toCamelCase(20) // output: ''
  * ```
 ")
@genType
let toCamelCase = StringCamelCase.toCamelCase
