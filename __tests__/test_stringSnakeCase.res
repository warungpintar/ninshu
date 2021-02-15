open Jest
open Expect

let testCases = list{
  // Camel & Pascal case.
  ("testString", "test_string", false),
  ("testString123", "test_string123", false),
  ("anHTMLTag", "an_html_tag", false),
  ("ID123String", "id123_string", false),
  ("a1bStar", "a1b_star", false),
  // Constant case.
  ("CONSTANT_CASE", "constant_case", false),
  ("CONST123_FOO", "const123_foo", false),
  // Random cases.
  ("FOO_bar", "foo_bar", false),
  ("XMLHttpRequest", "xml_http_request", false),
  ("IQueryAArgs", "i_query_a_args", false),
  // Non-alphanumeric separators.
  ("dot.case", "dot_case", false),
  ("path/case", "path_case", false),
  ("snake_case", "snake_case", true),
  ("snake_case123", "snake_case123", true),
  // Punctuation.
  ("'quotes'", "quotes", false),
  // Space between number parts.
  ("version 0.45.0", "version_0_45_0", false),
  ("version 0..78..9", "version_0_78_9", false),
  ("version 4_99/4", "version_4_99_4", false),
  // Whitespace.
  ("  test  ", "test", false),
  // Number string input.
  ("something_2014_other", "something_2014_other", true),
  ("amazon s3 data", "amazon_s3_data", false),
  ("foo_13_bar", "foo_13_bar", true),
}

describe("String/SnakeCase", () => {
  "check if the given string are snakeCase"->testAll(testCases, t => {
    let (case, _, expected) = t

    toEqual(expected, case->IsSnakeCase.isSnakeCase->expect)
  })

  "convert any case to snakeCase"->testAll(testCases, t => {
    let (case, expected, _) = t

    toEqual(expected, case->ToSnakeCase.toSnakeCase->expect)
  })
})
