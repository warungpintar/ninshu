open Jest
open Expect

describe("Object/KeysToCamelCase", () => {
  "depth1"->testAll(list{({"camel_case": "camelCase"}, {"camelCase": "camelCase"})}, t => {
    let (case, expected) = t

    expected->toEqual(case->KeysToCamelCase.keysToCamelCase->expect)
  })

  "deep"->testAll(
    list{
      (
        {
          "camel_case": "camelCase",
          "deep": {
            "person_hobbies": "Mirza",
            "hobbie_s": [{"na_me": "footbal"}, {"na_me": "swimming"}],
          },
        },
        {
          "camelCase": "camelCase",
          "deep": {
            "personHobbies": "Mirza",
            "hobbieS": [{"naMe": "footbal"}, {"naMe": "swimming"}],
          },
        },
      ),
    },
    t => {
      let (case, expected) = t

      expected->toEqual(case->KeysToCamelCase.keysToCamelCase->expect)
    },
  )
})
