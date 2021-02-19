import { Lazy } from "fp-ts/function";

export const lazy = <T>(a: T): Lazy<T> => () => a;
