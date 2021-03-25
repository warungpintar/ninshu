---
title: Validators/validate.ts
nav_order: 35
parent: Modules
---

## validate overview

Added in v0.0.2

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validate](#validate)

---

# Validators

## validate

validate with custom condition

**Signature**

```ts
export declare const validate: <T>(
  f: (a: any) => boolean
) => <E>(b: E) => <A>(a: A) => E.Either<E, unknown extends T ? (unknown extends A ? any : A) : T>
```

Added in v0.0.2
