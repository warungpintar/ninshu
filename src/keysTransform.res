@ocaml.doc("
  * Recursively transform all keys of object/array with custom processor
  *
  * ## Example
  * ```ts
  * import { keysTransform } from '@warungpintar/ninshuu'
  *
  * keysTransform({FULLNAME: 'rin'}, String.prototype.toLocaleLowerCase.apply) // output: {fullname: 'rin'}
  * ```
 ")
@genType
let rec keysTransform = (input: {..}, processor: string => string) => {
  let keysToCamelReducer = (input: {..}, prev, curr) => {
    let transformedKey = curr->processor
    let value = input->Common.getObjVal(curr)
    let valueType = value->Js.typeof

    let convertedValue = switch valueType {
    | "object" =>
      switch value->Js.Array.isArray {
      | true => %raw(`value.map(val => keysTransform(val, processor))`)
      | false => value->keysTransform(processor)
      }
    | _ => value
    }

    Js.Obj.assign(prev, transformedKey->Common.createObj(convertedValue))
  }

  input->Js.Obj.keys->Js.Array2.reduce(keysToCamelReducer(input), Js.Obj.empty())
}
