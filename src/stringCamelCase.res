// camelCase regex
let camelCaseRegexp = %re(
  "/^[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/g"
)

let isCamelCase = input =>
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.match_(camelCaseRegexp) == Some([input])

let toCamelCase = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->StringCommon.noCase
  ->Js.Array2.map(x => x->Js.String2.toLowerCase->StringCommon.firstLetterToUpper)
  ->Js.Array2.joinWith("")
  ->StringCommon.firstLetterToLower
}
