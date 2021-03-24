---
title: Validators/even.ts
nav_order: 24
parent: Modules
---

## even overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateEven](#validateeven)

---

# Validators

## validateEven

validate even value

**Signature**

```ts
export declare const validateEven: <E>(b: E) => <A>(a: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.2
