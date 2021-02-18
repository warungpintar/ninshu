/**
 * @since 1.0.0-alpha
 */
import { map, reduce } from "fp-ts/Array";
import { pipe, flow } from "fp-ts/function";

/**
 * Recursively transform all keys of object/array with custom processor
 *
 * @example
 * import { keysTransform } from '@warungpintar/ninshu'
 *
 * keysTransform(String.prototype.toLocaleLowerCase.apply)({FULLNAME: 'rin'}) // output: {fullname: 'rin'}
 *
 * @category object
 * @since 1.0.0-alpha
 */
export const keysTransform = (processor: (input: string) => string) => (
  input: Record<string, any> | any[]
): Record<string, any> | any[] => {
  const valueType = typeof input;

  if (valueType !== "object") return input;

  if (Array.isArray(input))
    return map((n) => {
      if (typeof n === "object")
        return flow(keysTransform(processor))(n as any[]);

      return n;
    })(input) as any[];

  return pipe(
    Object.keys(input),
    reduce({} as Record<string, any>, (prev, next) => {
      const val = input[next];
      prev[processor(next)] =
        typeof val === "object"
          ? flow(keysTransform(processor))((val as unknown) as any[])
          : val;
      return prev;
    })
  );
};
