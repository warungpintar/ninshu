---
title: lt.ts
nav_order: 22
parent: Modules
---

## lt overview

Added in v0.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [Either](#either)
  - [lt](#lt)
- [Is](#is)
  - [isLt](#islt)
- [Validators](#validators)
  - [validateLt](#validatelt)

---

# Either

## lt

either lower than

**Signature**

```ts
export declare const lt: Signature<unknown>
```

Added in v0.0.6

# Is

## isLt

lower than

**Signature**

```ts
export declare const isLt: Signature<boolean>
```

Added in v0.0.6

# Validators

## validateLt

lower than validation

**Signature**

```ts
export declare const validateLt: <A>(
  a: A
) => <E>(b: E) => <A>(a: A) => E.Either<E, unknown extends A ? (A extends A ? any : A) : A>
```

Added in v0.0.6
