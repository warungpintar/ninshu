const Benchmark = require("benchmark");
const { words } = require("../lib");
const _words = require("lodash/words");
const suite = new Benchmark.Suite();

// add tests
suite
  .add("lodash#words", function () {
    _words("Hello World!");
  })
  .add("ninshu#words", function () {
    words("Hello World!");
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
