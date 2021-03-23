import { is } from "../../src/Is";

class Person {
  name = "";
  age = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

describe("postive cases", () => {
  test("it should success", () => {
    const personA = new Person("a", 30);
    const personB = new Person("b", NaN);

    expect(is(Person)(personA)).toBeTruthy();
    expect(is(Person)(personB)).toBeTruthy();
    expect(is(String)(personA.name)).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    const personA = {
      name: "a",
      age: 30,
    };

    expect(is(Person)(personA)).toBeFalsy();
  });
});
