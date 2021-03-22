import { isIPv4, isIPv6, isIp } from "../../src/Is";

describe("postive cases", () => {
  test("(ipv4) it should success", () => {
    expect(isIPv4("192.168.1.1")).toBeTruthy();
    expect(isIPv4("192.000.1.1")).toBeTruthy();
  });

  test("(ipv6) it should success", () => {
    expect(isIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBeTruthy();
  });

  test("it should success", () => {
    expect(isIp("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBeTruthy();
    expect(isIp("192.000.1.1")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("(ipv4) it should fail", () => {
    expect(isIPv4("f!oo.com")).toBeFalsy();
  });

  test("(ipv4) it should fail", () => {
    expect(isIPv6("192.168.1.1")).toBeFalsy();
  });

  test("it should fail", () => {
    expect(isIPv4("192..1.1")).toBeFalsy();
  });
});
