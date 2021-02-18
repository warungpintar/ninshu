import { keysCamelCase } from "@object/keysCamelCase";

test("keys to camelcase", () => {
  expect(
    keysCamelCase({
      camel_case: "camelCase",
      deep: {
        person_hobbies: ["swimming"],
        hobbie_s: [{ na_me: "footbal" }, { na_me: "swimming" }],
      },
    })
  ).toStrictEqual({
    camelCase: "camelCase",
    deep: {
      personHobbies: ["swimming"],
      hobbieS: [{ naMe: "footbal" }, { naMe: "swimming" }],
    },
  });
});
