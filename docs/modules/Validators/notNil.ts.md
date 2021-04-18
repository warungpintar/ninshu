---
title: Validators/notNil.ts
nav_order: 37
parent: Modules
---

## notNil overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateNotNil](#validatenotnil)

---

# Validators

## validateNotNil

validate nil

**Signature**

```ts
export declare const validateNotNil: <E>(b: E) => <A>(a: A) => Either<E, unknown extends A ? any : A>
```

Added in v0.0.1
