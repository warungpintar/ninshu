import { keysSnakeCase } from "@object/keysSnakeCase";

test("keys to camelcase", () => {
  expect(
    keysSnakeCase({
      camelCase: "camelCase",
      deep: {
        personHobbies: ["swimming"],
        hobbieS: [{ naMe: "footbal" }, { naMe: "swimming" }],
      },
    })
  ).toStrictEqual({
    camel_case: "camelCase",
    deep: {
      person_hobbies: ["swimming"],
      hobbie_s: [{ na_me: "footbal" }, { na_me: "swimming" }],
    },
  });
});
