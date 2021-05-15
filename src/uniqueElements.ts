/**
 * @since 0.0.7
 */
import { isDeepEq } from "./Is/deepEq";

type Duplicate<T> = {
  indexs: number[];
  content: T;
};

/**
 * filter unique elements of an array
 * and locate the duplication indexs and it's content
 *
 * @since 0.0.7
 */
export const uniqueElements = <T>(a: T[]) => {
  const uniqueElements: T[] = [];
  const duplicates: Duplicate<T>[] = [];
  const cache = new Set<number>();

  for (let i = 0; i < a.length; i++) {
    if (cache.has(i)) {
      continue;
    }

    const current = a[i];
    const duplicateIndexs = [];
    for (let j = i + 1; j < a.length; j++) {
      if (isDeepEq(current)(a[j])) {
        cache.add(i);
        cache.add(j);
        duplicateIndexs.push(j);
      }
    }

    if (duplicateIndexs.length > 0) {
      duplicates.push({
        indexs: [i, ...duplicateIndexs],
        content: current,
      });
    } else {
      uniqueElements.push(current);
    }
  }

  return {
    uniqueElements,
    duplicates,
  };
};
