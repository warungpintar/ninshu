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
export isCamelCase = input =>
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.match_(Common.camelCaseRegexp) == Some([input])
