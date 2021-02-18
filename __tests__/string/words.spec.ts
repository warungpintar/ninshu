import { words } from "@string/words";

describe("words", () => {
  it("should support a `pattern`", function () {
    expect(words("abcd", /ab|cd/g)).toStrictEqual(["ab", "cd"]);
    expect(Array.from(words("abcd", "ab|cd"))).toStrictEqual(["ab"]);
  });

  it("should work with compound words", function () {
    expect(words("12ft")).toStrictEqual(["12", "ft"]);
    expect(words("aeiouAreVowels")).toStrictEqual(["aeiou", "Are", "Vowels"]);
    expect(words("enable 6h format")).toStrictEqual([
      "enable",
      "6",
      "h",
      "format",
    ]);
    expect(words("enable 24H format")).toStrictEqual([
      "enable",
      "24",
      "H",
      "format",
    ]);
    expect(words("isISO8601")).toStrictEqual(["is", "ISO", "8601"]);
    expect(words("LETTERSAeiouAreVowels")).toStrictEqual([
      "LETTERS",
      "Aeiou",
      "Are",
      "Vowels",
    ]);
    expect(words("tooLegit2Quit")).toStrictEqual(["too", "Legit", "2", "Quit"]);
    expect(words("walk500Miles")).toStrictEqual(["walk", "500", "Miles"]);
    expect(words("xhr2Request")).toStrictEqual(["xhr", "2", "Request"]);
    expect(words("XMLHttp")).toStrictEqual(["XML", "Http"]);
    expect(words("XmlHTTP")).toStrictEqual(["Xml", "HTTP"]);
    expect(words("XmlHttp")).toStrictEqual(["Xml", "Http"]);
  });
});
