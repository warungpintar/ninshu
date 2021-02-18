const Benchmark = require("benchmark");
const snakeCase = require("../lib/string/snakeCase").snakeCase;
const _snakeCase = require("lodash/snakeCase");
const suite = new Benchmark.Suite();

// add tests
suite
  .add("lodash#snakeCase", function () {
    _snakeCase("Hello World!");
  })
  .add("ninshu#snakeCase", function () {
    snakeCase("Hello World!");
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
