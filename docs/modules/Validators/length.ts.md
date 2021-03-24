---
title: Validators/length.ts
nav_order: 27
parent: Modules
---

## length overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateLength](#validatelength)

---

# Validators

## validateLength

validate length

**Signature**

```ts
export declare const validateLength: <E>(len: number, e: E) => <A>(val: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.2
