import { uniqueElements } from "../src";

const cases = [
  [
    [
      { name: "Ayu", class: "A" },
      { name: "Putri", class: "B" },
      { name: "Budi", class: "B" },
      { name: "Eko", class: "C" },
      { name: "Budi", class: "B" },
      { name: "Budi", class: "B" },
      { name: "Ayu", class: "A" },
    ],
    {
      uniqueElements: [
        { name: "Putri", class: "B" },
        { name: "Eko", class: "C" },
      ],
      duplicates: [
        {
          indexs: [0, 6],
          content: { name: "Ayu", class: "A" },
        },
        {
          indexs: [2, 4, 5],
          content: { name: "Budi", class: "B" },
        },
      ],
    },
  ],
  [
    [1, 3, 3, 4, 3, 6, 8, 10, 11, 10, 8],
    {
      uniqueElements: [1, 4, 6, 11],
      duplicates: [
        {
          indexs: [1, 2, 4],
          content: 3,
        },
        {
          indexs: [6, 10],
          content: 8,
        },
        {
          indexs: [7, 9],
          content: 10,
        },
      ],
    },
  ],
];

describe("find duplicate items", () => {
  cases.forEach(([c, expectation], idx) => {
    it(`test ${idx}`, () => {
      expect(uniqueElements(c as any)).toStrictEqual(expectation);
    });
  });
});
