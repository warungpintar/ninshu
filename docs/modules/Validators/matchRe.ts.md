---
title: Validators/matchRe.ts
nav_order: 13
parent: Modules
---

## matchRe overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Validators](#validators)
  - [matchRe](#matchre)

---

# Validators

## matchRe

validate regex

**Signature**

```ts
export declare const matchRe: (re: RegExp) => (value: unknown) => E.Left<string> | E.Right<unknown>
```

Added in v0.0.1
