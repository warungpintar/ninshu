---
title: lte.ts
nav_order: 23
parent: Modules
---

## lte overview

Added in v0.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [lte](#lte)
- [Is](#is)
  - [isLte](#islte)
- [Validators](#validators)
  - [validateLte](#validatelte)

---

# Either

## lte

either lower than or equal

**Signature**

```ts
export declare const lte: Signature<unknown>
```

Added in v0.0.6

# Is

## isLte

lower than or equal

**Signature**

```ts
export declare const isLte: Signature<boolean>
```

Added in v0.0.6

# Validators

## validateLte

lower than or equal validation

**Signature**

```ts
export declare const validateLte: <A>(
  a: A
) => <E>(b: E) => <A>(a: A) => E.Either<E, unknown extends A ? (A extends A ? any : A) : A>
```

Added in v0.0.6
