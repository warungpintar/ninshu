@ocaml.doc(
  "
  * Sign a message with a key.
  * ```ts
  * import { splitCamelWord } from '@warungpintar/ninshuu'
  *
  * splitCamelWord('camelCase') // output: ['camel', 'Case']
  * ```
  * @param input - string to be split
  * @param delimiter - custom delimiter
  * @returns Array of string
 "
)
@genType
let splitCamelWord = StringCamelCase.splitCamelWord