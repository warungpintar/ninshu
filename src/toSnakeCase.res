@ocaml.doc("
  * convert any given string into snake_case
  *
  * ## Example
  * ```ts
  * import { toSnakeCase } from '@warungpintar/ninshuu'
  *
  * toSnakeCase('camelCase') // output: camel_case
  *
  * // invoked using invalid value will return empty string
  * toSnakeCase(20) // output: ''
  * ```
 ")
@genType
export toSnakeCase = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->NoCase.noCase
  ->Js.Array2.filter(x => x != "")
  ->Js.Array2.map(x => x->Js.String2.toLowerCase)
  ->Js.Array2.joinWith("_")
}
