const Benchmark = require("benchmark");
const { keysSnakeCase } = require("../lib");
const decamelize = require("@ridi/object-case-converter").decamelize;
const suite = new Benchmark.Suite();

// add tests
suite
  .add("@ridi/object-case-converter", function () {
    decamelize(
      {
        camelCase: "camelCase",
        deep: {
          personHobbies: ["swimming"],
          hobbieS: [{ naMe: "footbal" }, { naMe: "swimming" }],
        },
      },
      { recursive: true, force: true }
    );
  })
  .add("ninshu#keysSnakeCase", function () {
    keysSnakeCase({
      camelCase: "camelCase",
      deep: {
        personHobbies: ["swimming"],
        hobbieS: [{ naMe: "footbal" }, { naMe: "swimming" }],
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
