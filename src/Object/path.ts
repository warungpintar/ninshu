/**
 * @since 0.0.5
 */
import * as O from "fp-ts/Option";

/**
 * Retrieve the value at a given path.
 *
 * @example
 * import { path } from '@warungpintar/ninshu'
 *
 * const data = {
 *   name: {
 *     firstname: "john",
 *     lastname: "doe"
 *   },
 *   age: 40
 * }
 *
 * const takeFirstName = path("name.firstname");
 * const takeLastName = path("name.lastname");
 * const takeHobbies = path("hobbies");
 *
 * takeFirstName(data);
 * // Some("john")
 *
 * takeLastName(data);
 * // Some("doe");
 *
 * takeHobbies(data);
 * // None
 *
 * @category object
 * @since 0.0.5
 */
export const path = (pth: string) => <A>(a: Record<string, A>) => {
  if (!pth) return O.none;

  const iterator = (cpth: string, root: typeof a): O.Option<A> => {
    if (!cpth) {
      return root ? O.some(root as any) : O.none;
    }

    const pths = cpth.split(".");
    const segment = pths[0];
    const nextRoot = root?.[segment];
    return nextRoot
      ? iterator(pths.slice(1).join("."), nextRoot as any)
      : O.none;
  };

  if (typeof a !== "object") {
    return O.none;
  }

  return iterator(pth, a);
};
