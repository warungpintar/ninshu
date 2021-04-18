---
title: gte.ts
nav_order: 3
parent: Modules
---

## gte overview

Added in v0.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [gte](#gte)
- [Is](#is)
  - [isGte](#isgte)
- [Validators](#validators)
  - [validateGte](#validategte)

---

# Either

## gte

either greater than or equal

**Signature**

```ts
export declare const gte: Signature<unknown>
```

Added in v0.0.6

# Is

## isGte

greater than or equal

**Signature**

```ts
export declare const isGte: Signature<boolean>
```

Added in v0.0.6

# Validators

## validateGte

greater than or equal validation

**Signature**

```ts
export declare const validateGte: <A>(
  a: A
) => <E>(b: E) => <A>(a: A) => E.Either<E, unknown extends A ? (A extends A ? any : A) : A>
```

Added in v0.0.6
