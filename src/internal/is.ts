import { right, left } from "fp-ts/Either";

export const isNumber = (a: any) =>
  isNaN(Number(a)) ? left(a) : right(Number(a));

export const isObject = (a: any) =>
  typeof a === "object" && !Array.isArray(a) ? right(a as object) : left(a);

export const isArray = (a: any) => (Array.isArray(a) ? right(a) : left(a));

export const isString = (a: any) =>
  typeof a === "string" ? right(a) : left(a);

export const isNotNil = (a: any) =>
  a !== null || a !== undefined ? right(a) : left(a);
