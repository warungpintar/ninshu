const Benchmark = require("benchmark");
const camelCase = require("../es/string/camelCase").camelCase;
const _camelCase = require("lodash/camelCase");
const suite = new Benchmark.Suite();

// add tests
suite
  .add("lodash#camelCase", function () {
    _camelCase("Hello World!");
  })
  .add("ninshu#toCamelCase", function () {
    camelCase("Hello World!");
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
