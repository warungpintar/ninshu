const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const { camelize } = require("@ridi/object-case-converter");
const keysToCamelCase = require("../keysToCamelCase");

const soal = [
  {
    id: "1",
    nick_name: "nick1",
    contacts: [
      { contact_type: "phone", value: "000-000-000" },
      { contact_type: "email", value: "test@email.com" },
    ],
  },
  { id: "2", nick_name: "nick2", contacts: [] },
  {
    id: "3",
    nick_name: "nick3",
    contacts: [{ contact_type: "address", value: "xxx" }],
  },
];

suite
  .add("ninshu#keysToCamel", function () {
    keysToCamelCase(soal);
  })
  .add("@ridi#camelize", function () {
    camelize(soal, { recursive: true });
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
