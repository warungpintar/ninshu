open Jest
open Expect

let testCases = list{
  // Camel & Pascal case.
  ("testString", "testString", true),
  ("testString123", "testString123", true),
  ("anHTMLTag", "anHtmlTag", true),
  ("ID123String", "id123String", false),
  ("a1bStar", "a1bStar", true),
  // Constant case.
  ("CONSTANT_CASE", "constantCase", false),
  ("CONST123_FOO", "const123Foo", false),
  // Random cases.
  ("FOO_bar", "fooBar", false),
  ("XMLHttpRequest", "xmlHttpRequest", false),
  ("IQueryAArgs", "iQueryAArgs", false),
  // Non-alphanumeric separators.
  ("dot.case", "dotCase", false),
  ("path/case", "pathCase", false),
  ("snake_case", "snakeCase", false),
  ("snake_case123", "snakeCase123", false),
  // Punctuation.
  ("'quotes'", "quotes", false),
  // Space between number parts.
  ("version 0.45.0", "version0450", false),
  ("version 0..78..9", "version0789", false),
  ("version 4_99/4", "version4994", false),
  // Whitespace.
  ("  test  ", "test", false),
  // Number string input.
  ("something_2014_other", "something2014Other", false),
  ("amazon s3 data", "amazonS3Data", false),
  ("foo_13_bar", "foo13Bar", false),
}

describe("String/CamelCase", () => {
  "check if the given string are camelCase"->testAll(testCases, t => {
    let (case, _, expected) = t

    toEqual(expected, case->Index.isCamelCase->expect)
  })

  "convert any case to camelCase"->testAll(testCases, t => {
    let (case, expected, _) = t

    toEqual(expected, case->Index.toCamelCase->expect)
  })
})
