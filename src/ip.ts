/**
 * @since 0.0.2
 */
import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import { validateMatchRe } from "./Validators/matchRe";
import { validateRequired } from "./Validators/required";
import { validateString } from "./Validators/string";
import { validate } from "./Validators/validate";
import { isMatchRe } from "./Is/matchRe";

/**
 * Validate IPv4
 *
 * @since 0.0.2
 * @category Is
 */
export const isIPv4 = <A>(val: A) => {
  return flow(
    validateRequired(false),
    E.chain(validateString(false)),
    E.chain(validateMatchRe(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/, false)),
    E.map((val) => val.split(".")),
    E.map((val) => val.sort((a, b) => +a - +b)),
    E.fold(
      (e) => e,
      (parts) => +parts[3] <= 255
    )
  )(val);
};

type IPV6Block = {
  blocks: string[];
  raw: string;
  foundOmissionBlock: boolean;
  expectedNumberOfBlocks: number;
  foundIPv4TransitionBlock: boolean;
};

const _parseBlock = (val: string) => {
  return {
    blocks: val.split(":"),
    raw: val,
    foundOmissionBlock: false, // marker to indicate ::
    expectedNumberOfBlocks: 8,
    foundIPv4TransitionBlock: false,
  };
};

// At least some OS accept the last 32 bits of an IPv6 address
// (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
// that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
// and '::a.b.c.d' is deprecated, but also valid.
const _parseIPv4TransitionBlock = (block: IPV6Block) => {
  const { blocks } = block;
  const lastBlock = blocks[blocks.length - 1];

  if (isIPv4(lastBlock)) {
    return {
      ...block,
      expectedNumberOfBlocks: 7,
      foundIPv4TransitionBlock: true,
    };
  }

  return block;
};

const ipv6BlockRe = /^[0-9A-F]{1,4}$/i;

const _validateIPV6Block = (block: IPV6Block) => {
  let foundOmissionBlock = block.foundOmissionBlock;
  let blocks = block.blocks;
  const { foundIPv4TransitionBlock } = block;

  // check multiple Omission
  if (blocks.some((item) => item === "")) {
    if (foundOmissionBlock) {
      return E.left(false);
    }

    blocks = blocks.filter((item) => !!item);
    foundOmissionBlock = true;
  }

  if (
    !(foundIPv4TransitionBlock
      ? blocks.slice(0, blocks.length - 2)
      : blocks
    ).every(isMatchRe(ipv6BlockRe))
  ) {
    return E.left(false);
  }

  return E.right({ ...block, blocks, foundOmissionBlock });
};

const _findOmissionBlock = (block: IPV6Block) => {
  const { blocks, raw } = block;

  if (raw.substr(0, 2) === "::") {
    return {
      ...block,
      blocks: blocks.slice(2),
      foundOmissionBlock: true,
    };
  }

  if (raw.substr(raw.length - 2) === "::") {
    return {
      ...block,
      blocks: blocks.slice(0, blocks.length - 2),
      foundOmissionBlock: true,
    };
  }

  return block;
};

/**
 * Validate IPv6
 *
 * @since 0.0.2
 * @category Is
 */
export const isIPv6 = <A>(val: A) => {
  return flow(
    validateRequired(false),
    E.chain(validateString(false)),
    // early exit using left
    E.chain((val) => (val === "::" ? E.left(true) : E.right(val))),
    E.map(_parseBlock),
    // ipv6 should not contains more than 8 block
    E.chain((val) =>
      val.blocks.length > val.expectedNumberOfBlocks
        ? E.left(false)
        : E.right(val)
    ),
    E.map(_findOmissionBlock),
    E.map(_parseIPv4TransitionBlock),
    E.chain(_validateIPV6Block),
    E.fold(
      (e) => e,
      (val) =>
        val.foundOmissionBlock
          ? val.blocks.length >= 1
          : val.blocks.length === val.expectedNumberOfBlocks
    )
  )(val);
};

/**
 * check if it's ipv4 / ipv6
 *
 * @since 0.0.2
 * @category Is
 */
export const isIp = <A>(val: A) => {
  return isIPv4(val) || isIPv6(val);
};

/**
 * ipv4 either
 *
 * @since 0.0.6
 * @category Either
 */
export const ipv4 = <A>(val: A) => (isIPv4(val) ? E.right(val) : E.left(val));

/**
 * ipv6 either
 *
 * @since 0.0.6
 * @category Either
 */
export const ipv6 = <A>(val: A) => (isIPv6(val) ? E.right(val) : E.left(val));

/**
 * ip either
 *
 * @since 0.0.6
 * @category Either
 */
export const ip = <A>(val: A) => (isIp(val) ? E.right(val) : E.left(val));

/**
 * validate ipv4 / ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIp = validate<string>(isIp);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv4 = validate<string>(isIPv4);

/**
 * validate ipv6
 *
 * @since 0.0.2
 * @category Validators
 */
export const validateIPv6 = validate<string>(isIPv6);
