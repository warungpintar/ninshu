---
title: Validators/odd.ts
nav_order: 36
parent: Modules
---

## odd overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateOdd](#validateodd)

---

# Validators

## validateOdd

validate odd value

**Signature**

```ts
export declare const validateOdd: <E>(b: E) => <A>(a: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.2
