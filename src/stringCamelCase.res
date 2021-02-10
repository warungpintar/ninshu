// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
let defaultSplitRegexp = [%re("/([a-z0-9])([A-Z])/g"), %re("/([A-Z])([A-Z][a-z])/g")];

// Remove all non-word characters.
let defaultStriptRegexp = %re("/[^A-Z0-9]+/gi");

let stripNonWord = (input) =>
  input
    ->Js.String2.replaceByRe(defaultStriptRegexp, "")

let splitCamelWord = (input, delimiter) => {
  let _delimiter = switch delimiter {
  | Some(del) => del
  | None => ":=:"
  }
  input
    ->Js.String2.replaceByRe(defaultSplitRegexp[0], "$1" ++ _delimiter ++ "$2")
    ->Js.String2.replaceByRe(defaultSplitRegexp[1], "$1" ++ _delimiter ++ "$2")
    ->Js.String2.split(_delimiter)
}