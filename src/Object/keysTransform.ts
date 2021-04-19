/**
 * @since 1.0.0-alpha
 */
import { map, reduce } from "fp-ts/Array";
import { pipe, flow } from "fp-ts/function";

const mapType = <A, B>(
  onArr: (a: A[]) => A[],
  onObj: (b: B) => B,
  onEither: (c: any) => any
) => (input: any) => {
  if (Array.isArray(input)) return onArr(input);
  if (typeof input === "object") return onObj(input as B);
  return onEither(input);
};

/**
 * Recursively transform all keys of object/array with custom processor
 *
 * @example
 * import { keysTransform } from '@warungpintar/ninshu'
 *
 * keysTransform((s: string) => s.toLowerCase())({FULLNAME: 'rin'}) // output: {fullname: 'rin'}
 *
 * @category object
 * @since 1.0.0-alpha
 */
export const keysTransform = (processor: (input: string) => string) => (
  input: any
): any => {
  const keyTransform = flow(keysTransform(processor));
  const handleArray = map((n) => (typeof n === "object" ? keyTransform(n) : n));
  const reducer = (prev: Record<string, any>, next: string) => {
    const currentValue = input[next];
    prev[processor(next)] =
      typeof currentValue === "object"
        ? keyTransform(currentValue)
        : currentValue;

    return prev;
  };
  const handleObject = flow(Object.keys, reduce({}, reducer));
  return pipe(
    input,
    mapType(handleArray, handleObject, (n) => n)
  );
};
