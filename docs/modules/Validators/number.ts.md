---
title: Validators/number.ts
nav_order: 20
parent: Modules
---

## number overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [validateNumber](#validatenumber)

---

# Validators

## validateNumber

validate number type

**Signature**

```ts
export declare const validateNumber: (errorMessage: string) => <A>(value: A) => E.Left<string> | E.Right<number>
```

Added in v0.0.1
