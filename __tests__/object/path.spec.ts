import * as O from "fp-ts/Option";
import { path } from "../../src/Object";

const data = {
  name: "john doe",
  details: {
    age: 40,
    hobbies: [
      {
        name: "guitar",
      },
      {
        name: "gaming",
        description: "playing dota 2",
      },
    ],
  },
};

const testCases = [
  ["name", O.some("john doe")],
  ["details.age", O.some(40)],
  ["details.hobbies.0.name", O.some("guitar")],
  ["details.hobbies.1.description", O.some("playing dota 2")],
  [undefined, O.none],
  ["details.age.[]", O.none],
];

describe("object path", () => {
  // @ts-ignore
  test.each(testCases)("path %s", (a: any, b: any) => {
    expect(path(a as string)(data)).toStrictEqual(b);
  });
});
