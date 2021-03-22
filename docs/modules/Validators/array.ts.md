---
title: Validators/array.ts
nav_order: 14
parent: Modules
---

## array overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateArray](#validatearray)

---

# Validators

## validateArray

validate array type

**Signature**

```ts
export declare const validateArray: (errorMessage: string) => <A>(value: A | A[]) => E.Right<A | A[]> | E.Left<string>
```

Added in v0.0.1
