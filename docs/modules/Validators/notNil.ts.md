---
title: Validators/notNil.ts
nav_order: 19
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
export declare const validateNotNil: (errorMessage: string) => <A>(value: A) => E.Left<string> | E.Right<A>
```

Added in v0.0.1
