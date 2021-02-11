open Jest
open Expect

describe("String/Common", () => {
  "noCase"->testAll(
    list{
      // Camel case.
      ("testString", ["test", "String"]),
      ("testString123", ["test", "String123"]),
      ("testString_1_2_3", ["test", "String", "1", "2", "3"]),
      ("x_256", ["x", "256"]),
      ("anHTMLTag", ["an", "HTML", "Tag"]),
      ("ID123String", ["ID123", "String"]),
      ("foo bar123", ["foo", "bar123"]),
      ("a1bStar", ["a1b", "Star"]),
      // Constant case.
      ("CONSTANT_CASE", ["CONSTANT", "CASE"]),
      ("CONST123_FOO", ["CONST123", "FOO"]),
      // Random cases.
      ("FOO_bar", ["FOO", "bar"]),
      ("XMLHttpRequest", ["XML", "Http", "Request"]),
      ("IQueryAArgs", ["I", "Query", "A", "Args"]),
      // Non-alphanumeric separators.
      ("dot.case", ["dot", "case"]),
      ("path/case", ["path", "case"]),
      ("snake_case", ["snake", "case"]),
      ("snake_case123", ["snake", "case123"]),
      ("snake_case_123", ["snake", "case", "123"]),
      // Punctuation.
      ("'quotes'", ["", "quotes", ""]),
      // Space between number parts.
      ("version 0.45.0", ["version", "0", "45", "0"]),
      ("version 0..78..9", ["version", "0", "78", "9"]),
      ("version 4_99/4", ["version", "4", "99", "4"]),
      // Whitespace.
      ("  test  ", ["test"]),
      // Number string input.
      ("something_2014_other", ["something", "2014", "other"]),
      ("amazon s3 data", ["amazon", "s3", "data"]),
      ("foo_13_bar", ["foo", "13", "bar"]),
    },
    t => {
      let (case, expected) = t

      expected->toEqual(case->StringCommon.noCase->expect)
    },
  )
})
