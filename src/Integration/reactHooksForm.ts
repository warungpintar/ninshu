/**
 * @since 0.0.3
 */

import * as E from "fp-ts/Either";

type Resolver<T extends Record<string, any>> = (
  parent: T
) => Partial<Record<keyof T, (val: any) => E.Either<string, any>>>;

type Error = {
  type: "validate" | "required";
  message: string;
};

type Errors = Record<string, Error>;

/**
 * React Hooks Form Resolver wrapper for validations
 *
 * @since 0.0.3
 * @category Integration
 */
export const RHFResolver = <T extends Record<string, any>>(
  resolver: Resolver<T>
) => (values: Record<keyof T, any>) => {
  const errorsObj = resolver(values);
  const errors = Object.keys(errorsObj).reduce((prev, next) => {
    const currentValidator = errorsObj[next];
    const currentResult = currentValidator && currentValidator(values[next]);

    if (currentResult && E.isLeft(currentResult)) {
      prev[next] = {
        type: "validate",
        message: currentResult.left,
      };
    }

    return prev;
  }, {} as Errors);

  return Promise.resolve({
    values: {},
    errors,
  });
};
