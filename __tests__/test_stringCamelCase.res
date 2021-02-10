open Jest;
open Expect;

describe("String/CamelCase", () => {
  "split camel case word"->testAll(list{
    ("camelCase", ["camel", "Case"], None),
    ("camelCaseCaseSkuy", ["camel", "Case", "Case", "Skuy"], Some("%"))
  }, t => {
    let (case, expected, delimiter) = t

    expected -> toEqual(case -> Index.splitCamelWord(delimiter) -> expect)
  })
})