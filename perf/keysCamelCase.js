const Benchmark = require("benchmark");
const { keysCamelCase } = require("../lib");
const camelize = require("@ridi/object-case-converter").camelize;
const suite = new Benchmark.Suite();

// add tests
suite
  .add("@ridi/object-case-converter", function () {
    camelize(
      {
        camel_case: "camelCase",
        deep: {
          person_hobbies: ["swimming"],
          hobbie_s: [{ na_me: "footbal" }, { na_me: "swimming" }],
        },
      },
      { recursive: true, force: true }
    );
  })
  .add("ninshu#keysCamelCase", function () {
    keysCamelCase({
      camel_case: "camelCase",
      deep: {
        person_hobbies: ["swimming"],
        hobbie_s: [{ na_me: "footbal" }, { na_me: "swimming" }],
      },
    });
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
