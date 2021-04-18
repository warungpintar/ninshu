import { isIPv4, isIPv6, isIp } from "../../src";

// source https://www.ibm.com/support/knowledgecenter/STQRQ9/com.ibm.storage.ts4500.doc/ts4500_opg_3584_IPv4_IPv6_addresses.html
const validIpv6List = [
  ["2001:db8:3333:4444:5555:6666:7777:8888"],
  ["2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF"],
  ["::"], // (implies all 8 segments are zero)
  ["2001:db8::"], // (implies that the last six segments are zero)
  ["::1234:5678"], // (implies that the first six segments are zero)
  ["2001:db8::1234:5678"], // (implies that the middle four segments are zero)
  ["2001:0db8:0001:0000:0000:0ab9:C0A8:0102"], // (This can be compressed to eliminate leading zeros, as follows: 2001:db8:1::ab9:C0A8:102 )

  // dual address
  ["2001:db8:3333:4444:5555:6666:1.2.3.4"],
  ["::11.22.33.44"], // (implies all six IPv6 segments are zero)
  ["2001:db8::123.123.123.123"], // (implies that the last four IPv6 segments are zero)
  ["::1234:5678:91.123.4.56"], // (implies that the first four IPv6 segments are zero)
  ["::1234:5678:1.2.3.4"], // (implies that the first four IPv6 segments are zero)
  ["2001:db8::1234:5678:5.6.7.8"], // (implies that the middle two IPv6 segments are zero)
];

describe("postive cases", () => {
  test("(ipv4) it should success", () => {
    expect(isIPv4("192.168.1.1")).toBeTruthy();
    expect(isIPv4("192.000.1.1")).toBeTruthy();
  });

  test.each(validIpv6List)("ipv6 postive %s", (ip) => {
    expect(isIPv6(ip)).toBeTruthy();
  });

  test("it should success", () => {
    expect(isIp("::")).toBeTruthy();
    expect(isIp("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBeTruthy();
    expect(isIp("192.000.1.1")).toBeTruthy();
    expect(isIp("::ffff:127.0.0.1")).toBeTruthy();
    expect(isIp("::192.168.1.1")).toBeTruthy();
  });
});

describe("negative cases", () => {
  test("(ipv4) it should fail", () => {
    expect(isIPv4("f!oo.com")).toBeFalsy();
  });

  test("(ipv6) it should fail", () => {
    expect(isIPv6("192.168.1.1")).toBeFalsy();
  });

  test("it should fail", () => {
    expect(isIPv4("192..1.1")).toBeFalsy();
  });
});
