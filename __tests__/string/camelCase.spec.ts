import { camelCase } from "../../src/string/camelCase";

const cases = [
  ["12 feet", "12Feet"],
  ["enable 6h format", "enable6HFormat"],
  ["enable 24H format", "enable24HFormat"],
  ["too legit 2 quit", "tooLegit2Quit"],
  ["walk 500 miles", "walk500Miles"],
  ["xhr2 request", "xhr2Request"],
  ["foo", "foo"],
  ["foo-bar", "fooBar"],
  ["foo-bar-baz", "fooBarBaz"],
  ["foo--bar", "fooBar"],
  ["--foo-bar", "fooBar"],
  ["--foo--bar", "fooBar"],
  ["FOO-BAR", "fooBar"],
  ["FOÈ-BAR", "foèBar"],
  ["-foo-bar-", "fooBar"],
  ["--foo--bar--", "fooBar"],
  ["foo.bar", "fooBar"],
  ["foo..bar", "fooBar"],
  ["..foo..bar..", "fooBar"],
  ["foo_bar", "fooBar"],
  ["__foo__bar__", "fooBar"],
  ["__foo__bar__", "fooBar"],
  ["foo bar", "fooBar"],
  ["  foo  bar  ", "fooBar"],
  ["-", ""],
  [" - ", ""],
  ["fooBar", "fooBar"],
  ["fooBar-baz", "fooBarBaz"],
  ["foìBar-baz", "foìBarBaz"],
  ["fooBarBaz-bazzy", "fooBarBazBazzy"],
  ["FBBazzy", "fbBazzy"],
  ["F", "f"],
  ["FooBar", "fooBar"],
  ["Foo", "foo"],
  ["FOO", "foo"],
  ["--", ""],
  ["", ""],
  ["--__--_--_", ""],
  ["foo bar?", "fooBar"],
  ["foo bar!", "fooBar"],
  ["foo bar$", "fooBar"],
  ["foo-bar#", "fooBar"],
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["AjaxXMLHttpRequest", "ajaxXmlHttpRequest"],
  ["Ajax-XMLHttpRequest", "ajaxXmlHttpRequest"],
  ["mGridCol6@md", "mGridCol6Md"],
  ["A::a", "aA"],
  ["Hello1World", "hello1World"],
  ["Hello11World", "hello11World"],
  ["hello1world", "hello1World"],
  ["Hello1World11foo", "hello1World11Foo"],
  ["Hello1", "hello1"],
  ["hello1", "hello1"],
  ["1Hello", "1Hello"],
  ["1hello", "1Hello"],
  ["h2w", "h2W"],
];

const negativeCases = [
  [null, ""],
  [undefined, ""],
  [new Error(), ""],
  [new Array(), ""],
];

test.each(cases)("camelCase(%s) === %s", (a, b) => {
  expect(camelCase(a)).toEqual(b);
});

test.each(negativeCases)(
  "negative camelCase",
  // @ts-ignore
  (a: any, b: string) => {
    expect(camelCase(a as string)).toStrictEqual(b);
  }
);
