/**
 * @since 0.0.2
 */
import { isString } from "./string";

/**
 * Validate IPv4
 * This is a modified version of github.com/chriso/validator.js `isIP` (version === 4)
 */
export const isIPv4 = <A>(val: A) => {
  if (!val || !isString(val)) {
    return false;
  }

  const _val = "" + val;

  // It will accept anything with three dots (.) and numeric digits
  const ipv4Regex = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
  if (!ipv4Regex.test(_val)) {
    return false;
  }
  // This part of code do checking for any invalid IP address like 256.256.256.256
  const parts = _val.split(".").sort(function (a, b) {
    return +a - +b;
  });
  return +parts[3] <= 255;
};

/**
 * Validate IPv6
 * This is a modified version of github.com/chriso/validator.js `isIP` (version === 6)
 */
export const isIPv6 = <A>(val: A) => {
  if (!val || !isString(val)) {
    return false;
  }

  const _val = "" + val;

  const ipv6Block = /^[0-9A-F]{1,4}$/i;
  const blocks = _val.split(":");
  let foundOmissionBlock = false; // marker to indicate ::

  // At least some OS accept the last 32 bits of an IPv6 address
  // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
  // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
  // and '::a.b.c.d' is deprecated, but also valid.
  const foundIPv4TransitionBlock = isIPv4(blocks[blocks.length - 1]);
  const expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

  if (blocks.length > expectedNumberOfBlocks) return false;

  // initial or final ::
  if (_val === "::") {
    return true;
  } else if (_val.substr(0, 2) === "::") {
    blocks.shift();
    blocks.shift();
    foundOmissionBlock = true;
  } else if (_val.substr(_val.length - 2) === "::") {
    blocks.pop();
    blocks.pop();
    foundOmissionBlock = true;
  }

  for (var i = 0; i < blocks.length; ++i) {
    // test for a :: which can not be at the string start/end
    // since those cases have been handled above
    if (blocks[i] === "" && i > 0 && i < blocks.length - 1) {
      if (foundOmissionBlock) return false; // multiple :: in address
      foundOmissionBlock = true;
    } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
      // it has been checked before that the last
      // block is a valid IPv4 address
    } else if (!ipv6Block.test(blocks[i])) {
      return false;
    }
  }

  if (foundOmissionBlock) {
    return blocks.length >= 1;
  }
  return blocks.length === expectedNumberOfBlocks;
};

export const isIp = <A>(val: A) => {
  return isIPv4(val) || isIPv6(val);
};
