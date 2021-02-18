import { fromPredicate } from "fp-ts/Option";

export const isString = fromPredicate((s: any) => typeof s === "string");

export const upperFirst = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const lowerFirst = (input: string) =>
  input.charAt(0).toLowerCase() + input.slice(1);

export const removeFirstChar = (input: string) => input.slice(1);

export const removeRightSingleQuotationMark = (input: string) =>
  input.replace(/['\u2019]/g, "");
