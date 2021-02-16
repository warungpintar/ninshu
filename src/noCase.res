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
export noCase = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.trim
  ->Js.String2.replaceByRe(Common.defaultStriptRegexp, ":=:")
  ->Js.String2.replaceByRe(Common.defaultSplitRegexp[0], "$1:=:$2")
  ->Js.String2.replaceByRe(Common.defaultSplitRegexp[1], "$1:=:$2")
  ->Js.String2.split(":=:")
}
