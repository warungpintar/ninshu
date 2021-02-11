// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
let defaultSplitRegexp = [%re("/([a-z0-9])([A-Z])/g"), %re("/([A-Z])([A-Z][a-z])/g")]

// Remove all non-word characters.
let defaultStriptRegexp = %re("/[^A-Z0-9]+/gi")

export noCase = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.trim
  ->Js.String2.replaceByRe(defaultStriptRegexp, ":=:")
  ->Js.String2.replaceByRe(defaultSplitRegexp[0], "$1:=:$2")
  ->Js.String2.replaceByRe(defaultSplitRegexp[1], "$1:=:$2")
  ->Js.String2.split(":=:")
}

export firstLetterToUpper = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.substring(~from=0, ~to_=1)
  ->Js.String2.toUpperCase ++ input->Js.String2.sliceToEnd(~from=1)
}

export firstLetterToLower = input => {
  input
  ->Common.integrityMap("", x => x->Common.typeof("string"))
  ->Js.String2.substring(~from=0, ~to_=1)
  ->Js.String2.toLowerCase ++ input->Js.String2.sliceToEnd(~from=1)
}
