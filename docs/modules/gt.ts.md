---
title: gt.ts
nav_order: 2
parent: Modules
---

## gt overview

Added in v0.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [gt](#gt)
- [Is](#is)
  - [isGt](#isgt)
- [Validators](#validators)
  - [validateGt](#validategt)

---

# Either

## gt

either greater than

**Signature**

```ts
export declare const gt: Signature<unknown>
```

Added in v0.0.6

# Is

## isGt

greater than

**Signature**

```ts
export declare const isGt: Signature<boolean>
```

Added in v0.0.6

# Validators

## validateGt

greater than validation

**Signature**

```ts
export declare const validateGt: <A>(
  a: A
) => <E>(b: E) => <A>(a: A) => E.Either<E, unknown extends A ? (A extends A ? any : A) : A>
```

Added in v0.0.6
