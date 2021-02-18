import { snakeCase } from "../../src/string/snakeCase";

const cases = [
  ["testString", "test_string"],
  ["testString123", "test_string_123"],
  ["anHTMLTag", "an_html_tag"],
  ["ID123String", "id_123_string"],
  ["a1bStar", "a_1_b_star"],
  // Constant case.
  ["CONSTANT_CASE", "constant_case"],
  ["CONST123_FOO", "const_123_foo"],
  // Random cases.
  ["FOO_bar", "foo_bar"],
  ["XMLHttpRequest", "xml_http_request"],
  ["IQueryAArgs", "i_query_a_args"],
  // Non-alphanumeric separators.
  ["dot.case", "dot_case"],
  ["path/case", "path_case"],
  ["snake_case", "snake_case"],
  ["snake_case123", "snake_case_123"],
  // Punctuation.
  ["'quotes'", "quotes"],
  // Space between number parts.
  ["version 0.45.0", "version_0_45_0"],
  ["version 0..78..9", "version_0_78_9"],
  ["version 4_99/4", "version_4_99_4"],
  // Whitespace.
  ["  test  ", "test"],
  // Number string input.
  ["something_2014_other", "something_2014_other"],
  ["amazon s3 data", "amazon_s_3_data"],
  ["foo_13_bar", "foo_13_bar"],
];

const negativeCases = [
  [null, ""],
  [undefined, ""],
  [new Error(), ""],
  [new Array(), ""],
];

test.each(cases)("snakeCase(%s) === %s", (a, b) => {
  expect(snakeCase(a)).toEqual(b);
});

test.each(negativeCases)(
  "negative snakeCase",
  // @ts-ignore
  (a: any, b: string) => {
    expect(snakeCase(a as string)).toStrictEqual(b);
  }
);
