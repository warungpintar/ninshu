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
export toCamelCase = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->NoCase.noCase
  ->Js.Array2.map(x => x->Js.String2.toLowerCase->FirstLetterToUpper.firstLetterToUpper)
  ->Js.Array2.joinWith("")
  ->FirstLetterToLower.firstLetterToLower
}
