import { isFqdn } from "../../src/Is";

describe("postive cases", () => {
  test("it should success", () => {
    expect(isFqdn("foo.com")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("it should fail", () => {
    expect(isFqdn("f!oo.com")).toBeFalsy();
    expect(isFqdn("foo")).toBeFalsy();
    expect(isFqdn("foo_.bar._foo")).toBeFalsy();
    expect(
      isFqdn(
        "www.badexample.com/accessToken=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlNjc4ZjIzMzQ3ZTM0MTBkYjdlNjg3Njc4MjNiMmQ3MCIsImlhdCI6MTQ2NjYzMzMxNywibmJmIjoxNDY2NjMzMzE3LCJleHAiOjE0NjY2MzY5MTd9.rgx_o8VQGuDa2AqCHSgVOD5G68"
      )
    ).toBeFalsy();
  });
});
