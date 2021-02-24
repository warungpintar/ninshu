import * as E from "fp-ts/Either";
import { Lazy } from "fp-ts/function";

export type Unit = "currency" | "percent" | "decimal";

export type Formatter<A, B> = (a: A) => E.Either<string, B>;
export type Parser<A, B> = (a: A) => E.Either<string, B>;
export interface INumberFormat {
  style: Lazy<Unit>;
  readonly format: Formatter<unknown, string>;
  readonly parse: Parser<unknown, number>;
}
