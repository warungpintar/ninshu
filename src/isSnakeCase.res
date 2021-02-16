@ocaml.doc("
  * check whether the given string are snake_case
  *
  * ## Example
  * ```ts
  * import { isSnakeCase } from '@warungpintar/ninshuu'
  *
  * isSnakeCase('camelCase') // output: true
  * ```
 ")
export isSnakeCase = input =>
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.match_(Common.snakeCaseRegexp) == Some([input])
